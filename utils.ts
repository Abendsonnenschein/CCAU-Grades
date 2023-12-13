type OptElement = Element | null;

export function addButton(
  name: string,
  id: string,
  fn: VoidFunction,
  sel: string,
) {
  const bar: OptElement = document.querySelector(sel);
  const newHTML: string = `<a class="btn" tabindex="0" id="${id}">${name}</a>`;

  bar?.insertAdjacentHTML("afterbegin", newHTML);
  bar?.insertAdjacentHTML("afterbegin", "&nbsp;");

  const btn: OptElement = document.querySelector(`#${id}`);
  btn?.addEventListener("click", fn, false);
}
