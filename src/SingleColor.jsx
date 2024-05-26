import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  }
  return (
    <div
      onClick={saveToClipboard}
      className={index > 10 ? " container color-light" : "container"}
      style={{ backgroundColor: `#${hex}` }}
    >
      <div className="content">
        <p>{weight}%</p>
        <p>#{hex}</p>
      </div>
    </div>
  );
}

export default SingleColor;
