import { headStartHtml } from "./fragments/document";
import { headEndHtml } from "./fragments/documentTail";
import { documentEndHtml } from "./fragments/end";
import { footerHtml } from "./fragments/footer";
import { headerHtml } from "./fragments/header";
import { scriptsHtml } from "./fragments/scripts";
import { css } from "./fragments/styles";
import { toastHtml } from "./fragments/toast";
import { aboutPageHtml } from "./pages/about";
import { certificationsPageHtml } from "./pages/certifications";
import { contactPageHtml } from "./pages/contact";
import { homePageHtml } from "./pages/home";
import { productsPageHtml } from "./pages/products";
import { projectsPageHtml } from "./pages/projects";

export const html = [
  headStartHtml,
  "<style>",
  css,
  "</style>",
  headEndHtml,
  headerHtml,
  homePageHtml,
  aboutPageHtml,
  productsPageHtml,
  projectsPageHtml,
  certificationsPageHtml,
  contactPageHtml,
  footerHtml,
  toastHtml,
  scriptsHtml,
  documentEndHtml,
].join("");

