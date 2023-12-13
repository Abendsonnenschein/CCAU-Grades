import { addButton } from "./utils";

function getTotal() {
  const sel: string = ".assignment-points-possible";
  const labels: Element[] = Array.from(document.querySelectorAll(sel));
  const len: number = labels.length;
  let total: number = 0;

  for (let i = 0; i < len; i++) {
    const label: string = (labels[i] as HTMLElement).innerText;
    const matches: RegExpMatchArray | null = label.match(/\d+/);

    if (!matches) {
      total = -1;
      break;
    }

    const numStr: string = matches[0];
    const num: number = parseInt(numStr);
    total += num;
  }

  alert(total);
}

export function addCalcButton() {
  addButton("Get Total", "ccau-points", getTotal, "#gradebook-actions");
}
