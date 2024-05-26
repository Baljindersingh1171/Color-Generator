import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

function ColorList({ colors }) {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
}

export default ColorList;
