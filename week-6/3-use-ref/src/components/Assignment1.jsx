import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const focusPoint = useRef(null);

  useEffect(() => {
    focusPoint.current.focus();
  }, []);

  const handleButtonClick = () => {
    focusPoint.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={focusPoint} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}