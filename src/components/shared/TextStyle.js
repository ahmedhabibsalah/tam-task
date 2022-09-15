import React from "react";

function TextStyle({ text, coloredIndices, color }) {
  if (text.split(" ").length < Math.max(...coloredIndices)) {
    throw new Error("Colored Indexes out of bounds");
  }
  const splitText = text.trim().split(" ");
  const finalText = splitText.map((word, index) => {
    return (
      <h1
        className={`${
          coloredIndices.includes(index)
            ? `text-[${color}] text-4xl font-bold`
            : "text-[#FFFFFF] text-2xl font-bold"
        }`}
        key={index}
      >
        {word}
      </h1>
    );
  });
  return <div className="flex flex-wrap gap-x-[1ch]">{finalText}</div>;
}

export default TextStyle;
