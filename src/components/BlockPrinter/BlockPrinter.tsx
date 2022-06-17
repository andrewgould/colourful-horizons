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

  for (let R = 0; R < reds.length; R++) {
    for (let G = 0; G < greens.length; G++) {
      for (let B = 0; B < blues.length; B++) {
        rows.push(
          ColourBlock(
            reds[R],
            greens[G],
            blues[B],
            `${reds[R]}-${greens[G]}-${blues[B]}`
          )
        );
      }
    }
  }

  return <div className="block-printer">{rows}</div>;
}
