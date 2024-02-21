import React, { useState, useEffect } from "react";

function BinaryAnimation() {
  const [matrix, setMatrix] = useState([]);

  // Function to generate a random binary digit
  const getRandomBinaryDigit = () => (Math.random() < 0.5 ? "0" : "1");

  // Function to update the matrix with random binary digits
  const updateMatrix = () => {
    const newMatrix = Array.from({ length: 2330 }, () => Array.from({ length: 1 }, () => getRandomBinaryDigit()));
    setMatrix(newMatrix);
  };

  // Update the matrix on component mount
  useEffect(() => {
    updateMatrix();
    const interval = setInterval(updateMatrix, 200); // Update every 200 milliseconds
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div
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
        opacity: 0.5,
      }}
    >
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "inline-block", whiteSpace: "nowrap", margin: "0" }}>
          {row.map((digit, colIndex) => (
            <span key={`${rowIndex}-${colIndex}`} style={{ color: digit === "1" ? "#00FF00" : "#009900" }}>
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
