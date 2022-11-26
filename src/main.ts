import "./style.css";
import { generator } from "./generator";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header class="p-4 d-flex align-items-center">
      <label for="colorHex" class="font-weight-bold me-4 inputLabel">Color Generator</label>
      <input type="text" placeholder="#333" id="colorHex" value="#333" class="ps-2 border-0 h-75 rounded">
      <button type="submit" id="submitBtn"  class="btn btn-primary h-75">Submit</button>
    </header>
    <section id="palette" class="row seven-cols"></section>
  </div>
`;

generator(
  document.querySelector<HTMLButtonElement>("#submitBtn")!,
  document.querySelector<HTMLInputElement>("#colorHex")!,
  document.querySelector<HTMLElement>("#palette")!
);
