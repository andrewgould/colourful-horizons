import "./ColourBlock.css";

function ColourBlock(red: number, green: number, blue: number, key: string) {
  let hexString = `rgb(${red - 1}, ${green - 1}, ${blue - 1})`;
  let blockStyle = {
    backgroundColor: hexString,
  };
  return <div className="colour-block" style={blockStyle} key={key}></div>;
}

function counter() {
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

  console.log(reds, greens, blues);

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

  return rows;
}

export { ColourBlock, counter };
