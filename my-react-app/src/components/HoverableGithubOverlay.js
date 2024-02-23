import React, { useState } from "react";
import { CardMedia, Divider } from "@mui/material";

// take image,height,link
const HoverableGithubOverlay = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const heightValue = parseInt(props.height, 10);
  const adjustedHeight = isNaN(heightValue) ? "auto" : `${heightValue - 100}px`;
  const double = props.double;
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
            <img
              className="enlarge-hover"
              // height={adjustedHeight}
              width="90vw"
              src={require(`../images/${props.overlayimage}`)}
              alt="GitHub Logo"
            />
          </a>
          <Divider variant="middle" />
          {props.double && (
            <a href={props.link2} target="_blank" rel="noopener noreferrer">
              <img
                className="enlarge-hover"
                // height={adjustedHeight}
                width="90vw"
                src={require(`../images/${props.overlayimage2}`)}
                alt="GitHub Logo"
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default HoverableGithubOverlay;
