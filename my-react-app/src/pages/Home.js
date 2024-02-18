import { Grid, Stack, Typography } from "@mui/material";

import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { Divider } from "@mui/material";
import useInViewport from "../utils/useInViewPort";
import Box from "@mui/system/Box";
import myPic from "../images/myPic.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function HomeTop() {
  // Scroll for Top Bar
  const handleClick = (targetID) => {
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID '${targetID}' not found.`);
    }
  };
  return (
    <div id="top" className="top">
      <Stack
        direction="row"
        spacing={3}
        divider={<Divider variant="middle" orientation="vertical" flexItem />}
        justifyContent="flex-end"
        alignItems="center"
        letterSpacing={"4px"}
        color="#00FF7F"
      >
        <div onClick={() => handleClick("home")}>HOME</div>
        <div onClick={() => handleClick("projects")}>PROJECTS</div>
        <div onClick={() => handleClick("techstack")}>TECH STACK</div>
        <div onClick={() => handleClick("contact")}>CONTACT</div>
      </Stack>
    </div>
  );
}

function HomeContent() {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class when element is in viewport
  function animateOnScroll() {
    var elements = document.querySelectorAll(".slide-from-left, .slide-from-right");
    elements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  // Resume Download
  const handleDownload = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "NicholasGandhi_Resume.pdf";
    anchor.click();
  };
  // Event listener for scroll
  window.addEventListener("scroll", animateOnScroll);

  // Initial check on page load
  animateOnScroll();
  const typographyStyles = {
    marginBottom: "2vh",
    lineHeight: "2",
    display: "flex",
    alignItems: "center",
  };
  const bgLink =
    "https://png.pngtree.com/background/20211215/original/pngtree-binary-matrix-code-flow-dark-abstract-background-picture-image_1466835.jpg";
  return (
    <div id="content" className="content" style={{ position: "relative" }}>
      <div
        id="home"
        style={{
          backgroundImage: `url("${bgLink}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: -1,
          }}
        ></div>
        <Grid container spacing={3} sx={{ marginBottom: "7.5vh" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: "5vh",
            }}
          >
            <div className="circle" style={{ backgroundImage: `url(${myPic})` }}>
              {" "}
            </div>
            <div
              className="icon-circle"
              style={{ transform: "translateX(80%)", backgroundImage: `url(${github})`, backgroundColor: "black" }}
            />
            <div
              className="icon-circle"
              style={{ transform: "translateX(-80%)", backgroundImage: `url(${linkedin})` }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#00FF7F"
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Nicholas Gandhi
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
              Aspiring Software Engineer | Tech Enthusiast |{" "}
              <span style={{ whiteSpace: "nowrap" }}>Web App Developer</span>
            </Typography>
            <div
              className="resume-button"
              style={{
                borderRadius: "10px",
                border: "1px solid white",
                padding: "7.5px 17.5px",
                background: "#131313",
                marginTop: "1vh",
                fontSize: "2vh",
                color: "#4cd964",
              }}
              onClick={handleDownload}
            >
              Resume
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            borderRadius: "20px",
            border: "1px solid #4b4b4b",
            margin: "6vh",
            marginTop: "15vh",
            padding: "2.5vh 3.5vh",
            boxShadow: "2px 2px 8px rgba(255, 255, 255, 0.12)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={"#00FF7F"}
                sx={{ marginBottom: "2vh", lineHeight: "2", textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
              >
                About
              </Typography>
              <Typography variant="h5">
                Hi, I'm <span style={{ fontWeight: "bold" }}>Nicholas</span>. I'm most drawn to full-stack development,
                especially when it comes to working on web projects. I enjoy handling both the front-end and back-end
                aspects of creating web applications. I'm always eager to learn about new advancements in the field and
                apply them to my work.
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={"#00FF7F"}
                sx={{ marginBottom: "2vh", lineHeight: "2", textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
              >
                Basic Information
              </Typography>
              <Typography variant="h5" sx={{ ...typographyStyles }}>
                <img src={require("../images/date.png")} style={{ width: "48px", marginRight: "12px" }} alt="Logo" />
                17 March 1999
              </Typography>
              <Typography variant="h5" sx={{ ...typographyStyles }}>
                <img
                  id="contact"
                  src={require("../images/email.png")}
                  style={{ width: "48px", marginRight: "12px" }}
                  alt="Logo"
                />
                nicholasgandhi84@gmail.com
              </Typography>
              <Typography variant="h5" sx={{ ...typographyStyles }}>
                <img src={require("../images/call.png")} style={{ width: "48px", marginRight: "10px" }} alt="Logo" />{" "}
                +65 85851763
              </Typography>
              <Typography variant="h5" sx={{ ...typographyStyles }}>
                <img
                  src={require("../images/language.png")}
                  style={{ width: "48px", marginRight: "12px" }}
                  alt="Logo"
                />
                English,Bahasa
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div id="projects" style={{ display: "flex", justifyContent: "space-evenly", margin: "7.5vh" }}></div>
          <Divider
            sx={{
              width: "90%",
              margin: "auto",
              textAlign: "center",
              color: "#00FF7F",
              borderColor: "#00FF7F",
              "&::before, &::after": {
                bgcolor: "#00FF7F",
                boxShadow: "2px 2px 8px rgba(0, 255, 127, 0.5)",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}>
              Projects
            </Typography>
          </Divider>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}>Grid insert projects</div>
        </div>
        <div>
          <div id="techstack" style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}></div>
          <Divider
            sx={{
              width: "90%",
              margin: "auto",
              textAlign: "center",
              color: "00FF7F",
              borderColor: "#00FF7F",
              "&::before, &::after": {
                bgcolor: "#00FF7F",
                boxShadow: "2px 2px 8px rgba(0, 255, 127, 0.5)",
              },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color={"#00FF7F"}
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Tech Stack
            </Typography>
          </Divider>
          <div className="tech-stack-row-container slide-from-left">
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/react.png")} alt="Logo" /> <Typography variant="h4">React</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/javascript.png")} alt="Logo" /> <Typography variant="h4">JS</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/html5.png")} alt="Logo" /> <Typography variant="h4">HTML5</Typography>
            </div>
          </div>

          <div className="tech-stack-row-container slide-from-right">
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/c.png")} alt="Logo" /> <Typography variant="h4">C</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/csharp.png")} alt="Logo" /> <Typography variant="h4">C#</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/jquery.png")} alt="Logo" /> <Typography variant="h4">JQuery</Typography>
            </div>
          </div>

          <div className="tech-stack-row-container slide-from-left">
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/postgres.png")} alt="Logo" />{" "}
              <Typography variant="h4">PostgresSQL</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/python.png")} alt="Logo" /> <Typography variant="h4">Python</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/java.jpg")} alt="Logo" /> <Typography variant="h4">Java</Typography>
            </div>
          </div>

          <div className="tech-stack-row-container2 slide-from-right">
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/mongodb.jpg")} alt="Logo" /> <Typography variant="h4">MongoDB</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/go.png")} alt="Logo" /> <Typography variant="h4">Go</Typography>
            </div>

            <div className="tech-stack-row-item animate-row slide-from-left">
              <img src={require("../images/nodejs.jpg")} alt="Logo" /> <Typography variant="h4">NodeJS</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/express.png")} alt="Logo" /> <Typography variant="h4">ExpressJS</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomeTop, HomeContent };
