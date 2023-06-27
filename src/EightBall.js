import { useState } from "react";
import "./EightBall.css";

export default function EightBall({ data }) {
  let randNum = Math.floor(Math.random() * data.length);
  const [msg, setMsg] = useState("Click for the question!");
  const [bgcolor, setBgcolor] = useState("maroon");

  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="EightBall"
      onClick={() => {
        setMsg(data[randNum].msg);
        setBgcolor(data[randNum].color);
      }}
    >
      {msg}
    </div>
  );
}
