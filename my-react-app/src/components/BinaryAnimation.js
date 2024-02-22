import React, { useState, useEffect } from "react";

function BinaryAnimation() {
  const [matrix, setMatrix] = useState([]);

  const getRandomBinaryDigit = () => (Math.random() < 0.5 ? "0" : "1");

  const updateMatrix = () => {
    const newMatrix = Array.from({ length: 2330 }, () => Array.from({ length: 1 }, () => getRandomBinaryDigit()));
    setMatrix(newMatrix);
  };

  // Update the matrix on component mount
  useEffect(() => {
    updateMatrix();
    const interval = setInterval(updateMatrix, 150);
    return () => clearInterval(interval);
  }, []);

  // Function to calculate the color based on row index
  const calculateColor = (rowIndex) => {
    const percentage = (rowIndex / matrix.length) * 100;
    const r = 0;
    const g = Math.round(255 - (255 - 0) * (percentage / 100));
    const b = Math.round(0 + (100 - 0) * (percentage / 100));
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div id="binary-animation"
      style={{
        position: "absolute",
        zIndex: "0",
        fontFamily: "Courier",
        fontSize: "16px",
        lineHeight: "1.5",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        height: "50vh",
        opacity: 0.75,
      }}
    >
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "inline-block", whiteSpace: "nowrap", margin: "0" }}>
          {row.map((digit, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              style={{
                color: calculateColor(rowIndex),
                textShadow: `0 0 1px ${calculateColor(rowIndex)}`,
              }}
            >
              {digit}
            </span>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

export default BinaryAnimation;
