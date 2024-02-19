import React, { useState } from "react";
import { CardMedia } from "@mui/material";

// take image,height,link
const HoverableGithubOverlay = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const heightValue = parseInt(props.height, 10);
  const adjustedHeight = isNaN(heightValue) ? "auto" : `${heightValue - 40}px`;

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardMedia component="img" height={props.height} image={require(`../images/${props.image}`)} alt="Placeholder" />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: `${props.height}`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img height={adjustedHeight} src={require("../images/github.png")} alt="GitHub Logo" />
          </a>
        </div>
      )}
    </div>
  );
};

export default HoverableGithubOverlay;
