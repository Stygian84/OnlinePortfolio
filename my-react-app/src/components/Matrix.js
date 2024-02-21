import React, { useState, useEffect } from "react";

function MatrixAnimation() {
  const [matrix, setMatrix] = useState([]);

  // Function to generate a random character
  const getRandomChar = () => String.fromCharCode(Math.floor(Math.random() * 94) + 33);

  // Function to update the matrix with random characters
  const updateMatrix = () => {
    const newMatrix = Array.from({ length: 500 }, () => Array.from({ length: 1 }, () => getRandomChar()));
    setMatrix(newMatrix);
  };

  // Update the matrix on component mount
  useEffect(() => {
    updateMatrix();
    const interval = setInterval(updateMatrix, 100); // Update every 100 milliseconds
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div
      style={{
        position: "relative",
        zIndex: "0",
        fontFamily: "Courier",
        fontSize: "16px",
        lineHeight: "1.5",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        height: "10vh",
        opacity: 0.5,
      }}
    >
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "inline-block", whiteSpace: "nowrap", margin: "0" }}>
          {row.map((char, colIndex) => (
            <span key={`${rowIndex}-${colIndex}`} style={{ color: "#00FF00" }}>
              {char}
            </span>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

export default MatrixAnimation;
