import "./BlockPrinter.css";
import { ColourBlock } from "../ColourBlock/ColourBlock";

export function BlockPrinter() {
  let rows = [],
    i = 0,
    reds = [],
    greens = [],
    blues = [];

  while (i < 256) {
    i += 8;

    reds.push(i);
    greens.push(i);
    blues.push(i);
  }

  for (let r = 0; r < reds.length; r++) {
    for (let g = 0; g < greens.length; g++) {
      for (let b = 0; b < blues.length; b++) {
        rows.push(
          ColourBlock(
            reds[r],
            greens[g],
            blues[b],
            `${reds[r]}-${greens[g]}-${blues[b]}`
          )
        );
      }
    }
  }

  return <div className="block-printer">{rows}</div>;
}
