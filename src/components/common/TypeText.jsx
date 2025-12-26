import { useEffect, useState } from "react";

export default function TypeText({
  text,
  speed = 80,
  pause = 1500,
}) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < text.length) {
      timer = setTimeout(() => {
        setDisplay(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplay("");
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [index, text, speed, pause]);

  return (
    <span className="inline-flex items-center">
      {display}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}
