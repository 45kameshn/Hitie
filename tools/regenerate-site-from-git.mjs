import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function extractHtmlTemplateLiteral(tsSource) {
  const match = tsSource.match(
    /const html = `([\s\S]*)`;\s*export default function Page/s,
  );
  if (!match) throw new Error("Failed to extract `const html = ...` template.");
  return match[1];
}

function removeBoilerCardFromProducts(productsHtml) {
  const lines = productsHtml.split(/\r?\n/);
  const boilerLineIndex = lines.findIndex((l) => l.includes('alt="Boiler Tubes"'));
  if (boilerLineIndex < 0) return productsHtml;

  let startIndex = boilerLineIndex;
  while (startIndex >= 0 && lines[startIndex].trim() !== '<div class="product-card">') {
    startIndex -= 1;
  }
  if (startIndex < 0) throw new Error("Failed to locate Boiler card start.");

  let endIndex = boilerLineIndex;
  while (endIndex < lines.length && !/^\s{8}<\/div>\s*$/.test(lines[endIndex])) {
    endIndex += 1;
  }
  if (endIndex >= lines.length) throw new Error("Failed to locate Boiler card end.");

  lines.splice(startIndex, endIndex - startIndex + 1);
  return lines.join("\n");
}

function writeTsFragment(filePath, exportName, content) {
  const bt = "`";
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `export const ${exportName} = ${bt}${content}${bt};\n`, "utf8");
}

const tsSource = execFileSync("git", ["show", "HEAD:app/page.tsx"], {
  encoding: "utf8",
});
const html = extractHtmlTemplateLiteral(tsSource);

const styleOpen = html.indexOf("<style>");
const styleClose = html.indexOf("</style>");
if (styleOpen < 0 || styleClose < 0 || styleOpen >= styleClose) {
  throw new Error("Failed to locate <style> block.");
}

const headerStart = html.indexOf("<!-- HEADER -->");
if (headerStart < 0) throw new Error("Missing <!-- HEADER -->");

const homeStart = html.indexOf("<!-- ====== HOME PAGE ====== -->");
const aboutStart = html.indexOf("<!-- ====== ABOUT PAGE ====== -->");
const productsStart = html.indexOf("<!-- ====== PRODUCTS PAGE ====== -->");
const projectsStart = html.indexOf("<!-- ====== PROJECTS PAGE ====== -->");
const certStart = html.indexOf("<!-- ====== CERTIFICATIONS PAGE ====== -->");
const contactStart = html.indexOf("<!-- ====== CONTACT PAGE ====== -->");
const footerStart = html.indexOf("<!-- ====== FOOTER ====== -->");
const toastStart = html.indexOf("<!-- TOAST -->");
const scriptStart = html.indexOf("<script>");
const scriptEnd = html.indexOf("</script>");

for (const [name, idx] of Object.entries({
  homeStart,
  aboutStart,
  productsStart,
  projectsStart,
  certStart,
  contactStart,
  footerStart,
  toastStart,
  scriptStart,
  scriptEnd,
})) {
  if (idx < 0) throw new Error(`Missing marker index: ${name}`);
}
if (scriptStart >= scriptEnd) throw new Error("Invalid <script> block order.");

const headStartHtml = html.slice(0, styleOpen);
const css = html.slice(styleOpen + "<style>".length, styleClose);
const headEndHtml = html.slice(styleClose + "</style>".length, headerStart);

const headerHtml = html.slice(headerStart, homeStart);
const homePageHtml = html.slice(homeStart, aboutStart);
const aboutPageHtml = html.slice(aboutStart, productsStart);

let productsPageHtml = html.slice(productsStart, projectsStart);
productsPageHtml = removeBoilerCardFromProducts(productsPageHtml);

const projectsPageHtml = html.slice(projectsStart, certStart);
const certificationsPageHtml = html.slice(certStart, contactStart);
const contactPageHtml = html.slice(contactStart, footerStart);
const footerHtml = html.slice(footerStart, toastStart);
const toastHtml = html.slice(toastStart, scriptStart);
const scriptsHtml = html.slice(scriptStart, scriptEnd + "</script>".length);
const documentEndHtml = html.slice(scriptEnd + "</script>".length);

writeTsFragment("app/site/fragments/document.ts", "headStartHtml", headStartHtml);
writeTsFragment("app/site/fragments/styles.ts", "css", css);
writeTsFragment("app/site/fragments/documentTail.ts", "headEndHtml", headEndHtml);
writeTsFragment("app/site/fragments/header.ts", "headerHtml", headerHtml);
writeTsFragment("app/site/fragments/footer.ts", "footerHtml", footerHtml);
writeTsFragment("app/site/fragments/toast.ts", "toastHtml", toastHtml);
writeTsFragment("app/site/fragments/scripts.ts", "scriptsHtml", scriptsHtml);
writeTsFragment("app/site/fragments/end.ts", "documentEndHtml", documentEndHtml);

writeTsFragment("app/site/pages/home.ts", "homePageHtml", homePageHtml);
writeTsFragment("app/site/pages/about.ts", "aboutPageHtml", aboutPageHtml);
writeTsFragment("app/site/pages/products.ts", "productsPageHtml", productsPageHtml);
writeTsFragment("app/site/pages/projects.ts", "projectsPageHtml", projectsPageHtml);
writeTsFragment(
  "app/site/pages/certifications.ts",
  "certificationsPageHtml",
  certificationsPageHtml,
);
writeTsFragment("app/site/pages/contact.ts", "contactPageHtml", contactPageHtml);

process.stdout.write("Regenerated `app/site/**` from `git HEAD:app/page.tsx`.\n");
