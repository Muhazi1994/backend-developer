import { useState } from "react";

export default function StateComponent() {
  // state
    // value, function to change state value
  const [clickNumber, setClickNumber] = useState(0);
  const [sentence, setSentence] = useState("Dazai is the best husbando");
  return (
    <div>
      <button
        onClick={() => {
          setClickNumber(clickNumber + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setClickNumber(clickNumber - 1);
        }}
      >
        -
      </button>
      <p>{clickNumber}</p>
      {/* conditional rendering */}
      {clickNumber % 2 === 0 && clickNumber !== 0 && clickNumber > 0 ? (
        <p style={{ color: "red" }}>This is even number</p>
      ) : null}
      <p style={{ fontWeight: "bold" }}>{sentence}</p>
      <button
        onClick={() => {
          setSentence("tapi boong");
        }}
      >
        Reveal the Truth
      </button>
    </div>
  );
}
