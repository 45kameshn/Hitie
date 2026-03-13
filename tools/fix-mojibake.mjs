import fs from "node:fs";
import path from "node:path";

function decodeUtf8Mojibake(input) {
  return Buffer.from(input, "latin1").toString("utf8");
}

function findTsFiles(rootDir) {
  const results = [];
  const queue = [rootDir];
  while (queue.length) {
    const current = queue.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) queue.push(fullPath);
      else if (entry.isFile() && fullPath.endsWith(".ts")) results.push(fullPath);
    }
  }
  return results;
}

function fixFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const withoutBom = src.startsWith("\uFEFF") ? src.slice(1) : src;

  const match = withoutBom.match(/^export const (\w+) = `([\s\S]*)`;\s*$/);
  if (!match) return { filePath, changed: false, reason: "skip" };

  const exportName = match[1];
  const template = match[2];

  const fixed = decodeUtf8Mojibake(template);
  if (fixed === template) return { filePath, changed: false, reason: "no-op" };

  const out = `export const ${exportName} = \`${fixed}\`;\n`;
  fs.writeFileSync(filePath, out, "utf8");
  return { filePath, changed: true, reason: "fixed" };
}

const siteDir = path.join(process.cwd(), "app", "site");
const tsFiles = findTsFiles(siteDir).filter(
  (p) => !p.endsWith(path.join("app", "site", "html.ts")),
);

let changedCount = 0;
for (const filePath of tsFiles) {
  const result = fixFile(filePath);
  if (result.changed) changedCount += 1;
}

process.stdout.write(`Fixed mojibake in ${changedCount} file(s).\n`);
