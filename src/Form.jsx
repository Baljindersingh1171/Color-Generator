import { useState } from "react";
function Form({ addColor }) {
  const [color, setColor] = useState("");
  function handleChange(e) {
    setColor(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addColor(color);
  }
  console.log(color);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Color Generator</span>
        <input
          className="colorpicker"
          style={{ height: "30px" }}
          type="color"
          value={color}
          onChange={handleChange}
        />

        <input
          id="inp2"
          type="text"
          value={color}
          placeholder="#feeee9"
          onChange={handleChange}
        />
        <button style={{ backgroundColor: color, color: "white" }}>
          Generate
        </button>
      </form>
    </div>
  );
}

export default Form;
