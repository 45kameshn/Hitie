import { html } from "./site/html";

export default function Page() {
  return (
    <iframe
      title="Hitie International"
      srcDoc={html}
      style={{ width: "100%", height: "100vh", border: "0" }}
    />
  );
}
