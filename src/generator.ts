import Values from "values.js";

export function generator(
  element: HTMLButtonElement,
  inputElement: HTMLInputElement,
  palette: HTMLElement
): void {
  const submitValue = (): void => {
    const colors: Values[] = new Values(inputElement.value).all(10);
    palette.innerHTML = "";
    colors.map((color) => {
      const paletteText: string = `
      <div class="col-lg-1 col-sm-4  pt-3 px-4 palette" style="background-color:#${color.hex}">
        <p class="${color.type} mb-0 ms-2">${color.weight}%</p>
        <p class="${color.type} ms-2">#${color.hex}</p>
      </div>`;
      return (palette.innerHTML += paletteText);
    });
  };
  submitValue();
  element.addEventListener("click", submitValue);
}
