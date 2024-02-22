import React, { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

function MatrixAnimation() {
  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef(null);
  const isVisible = useIntersectionObserver(matrixRef, 1000);

  // Function to generate a random character
  const getRandomChar = () => String.fromCharCode(Math.floor(Math.random() * 94) + 33);

  // Function to update the matrix with random characters
  const updateMatrix = () => {
    const newMatrix = Array.from({ length: 450 }, () => Array.from({ length: 1 }, () => getRandomChar()));
    setMatrix(newMatrix);
  };

  useEffect(() => {
    updateMatrix();
    const interval = setInterval(updateMatrix, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={matrixRef}
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
      {isVisible ? (
        matrix.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              margin: "0",
              opacity: 0,
              animation: `fadeIn 0.20s ${rowIndex * 0.02}s forwards`,
            }}
          >
            {row.map((char, colIndex) => (
              <span
                key={`${rowIndex}-${colIndex}`}
                style={{
                  color: "#00FF00",
                  padding: "2px",
                }}
              >
                {char}
              </span>
            ))}
            <br />
          </div>
        ))
      ) : (
        <div />
      )}
    </div>
  );
}

export default MatrixAnimation;
