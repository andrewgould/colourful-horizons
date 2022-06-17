import "./ColourBlock.css";

function ColourBlock(red: number, green: number, blue: number, key: string) {
  let hexString = `rgb(${red - 1}, ${green - 1}, ${blue - 1})`;
  let blockStyle = {
    backgroundColor: hexString,
  };
  return <div className="colour-block" style={blockStyle} key={key}></div>;
}

export { ColourBlock };
