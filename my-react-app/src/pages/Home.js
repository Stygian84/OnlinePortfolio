import { Grid, Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";

import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { Divider } from "@mui/material";
import useInViewport from "../utils/useInViewPort";
import Box from "@mui/system/Box";
import myPic from "../images/myPic.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import HoverableGithubOverlay from "../components/HoverableGithubOverlay";
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
  const [isHovered, setIsHovered] = useState(false);
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
  const aboutTypographyStyles = {
    marginBottom: "2vh",
    lineHeight: "2",
    textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)",
  };
  const typographyStyles = {
    marginBottom: "2vh",
    lineHeight: "2",
    display: "flex",
    alignItems: "center",
  };
  const dividerStyles = {
    width: "90%",
    margin: "auto",
    textAlign: "center",
    color: "#00FF7F",
    borderColor: "#00FF7F",
    "&::before, &::after": {
      bgcolor: "#00FF7F",
      boxShadow: "2px 2px 8px rgba(0, 255, 127, 0.5)",
    },
  };
  const projectCardContainerStyless = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };
  const bgLink =
    "https://png.pngtree.com/background/20211215/original/pngtree-binary-matrix-code-flow-dark-abstract-background-picture-image_1466835.jpg";
  return (
    // Title and Background Part
    <div id="content" className="content" style={{ position: "relative" }}>
      <div
        id="home"
        style={{
          backgroundImage: `url("${bgLink}")`,
        }}
      >
        <div id="black-overlay"></div>
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
            <a href="https://github.com/stygian84" target="_blank" rel="noopener noreferrer">
              <div
                className="icon-circle"
                style={{ transform: "translateX(50%)", backgroundImage: `url(${github})`, backgroundColor: "black" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-gandhi-peradidjaya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="icon-circle"
                style={{ transform: "translateX(-150%)", backgroundImage: `url(${linkedin})` }}
              />
            </a>
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
            <div className="resume-button" onClick={handleDownload}>
              Resume
            </div>
          </Grid>
        </Grid>

        {/* About Me Box */}
        <div id="about-box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography variant="h4" fontWeight="bold" color={"#00FF7F"} sx={{ ...aboutTypographyStyles }}>
                About Me
              </Typography>
              <Typography variant="h5">
                Hi, I'm <span style={{ fontWeight: "bold" }}>Nicholas</span>. I'm most drawn to full-stack development,
                especially when it comes to working on web projects. I enjoy handling both the front-end and back-end
                aspects of creating web applications. I'm always eager to learn about new advancements in the field and
                apply them to my work.
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography variant="h4" fontWeight="bold" color={"#00FF7F"} sx={{ ...aboutTypographyStyles }}>
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

        {/* Projects */}
        <div>
          <div id="projects" style={{ display: "flex", justifyContent: "space-evenly", margin: "7.5vh" }}></div>
          <Divider sx={{ ...dividerStyles }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={"5vh"}
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Projects
            </Typography>
          </Divider>

          {/* Projects First Row */}
          <Grid container spacing={6} justifyContent="center" marginBottom={"5vh"}>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "30vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="web.png"
                  overlayimage="github.png"
                  height="200px"
                  link="https://github.com/Stygian84/OnlinePortfolio"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    Personal Website
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">ReactJS, CSS, HTML5</Typography>
                  <Typography variant="body2" component="p">
                    My personal website serves as a digital portfolio showcasing my expertise, skills, and projects.{" "}
                    {"\nThis website is still in development"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "30vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="planttracker (1).jpg"
                  overlayimage="github.png"
                  overlayimage2="website.png"
                  height="200px"
                  link="https://github.com/Stygian84/PlantTrackerApp"
                  link2="https://planttracker.netlify.app"
                  double={true}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    Plant Tracker App
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">ReactJS, ExpressJS, PostgreSQL</Typography>
                  <Typography variant="body2" component="p">
                    Simple mobile web app to monitor the health of plants where the data are stored in a database.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "30vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="platformer.png"
                  overlayimage="github.png"
                  height="200px"
                  link="https://github.com/Stygian84/PlatformerGame"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    Platformer Game
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">Unity, C#</Typography>
                  <Typography variant="body2" component="p">
                    Simple platformer game where the player needs to collect collectibles and kill a boss to finish the
                    game.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Projects Second Row */}
          <Grid container spacing={6} justifyContent="center" marginBottom={"10vh"}>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "22.5vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="wepack4u.png"
                  overlayimage="github.png"
                  height="200px"
                  link="https://github.com/bojx96/WePack4U"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    Food Ordering App
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">Android Studio, Java</Typography>
                  <Typography variant="body2" component="p">
                    Online ordering self pick-up app that aims reduce overall waiting time on take aways.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "22.5vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="aimbot.jpg"
                  overlayimage="github.png"
                  height="200px"
                  link="https://github.com/Stygian84/AimBotTest"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    OpenCV Aim Bot
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">Python3</Typography>
                  <Typography variant="body2" component="p">
                    Implement OpenCV to detect enemies' head through color detection and size filtering on the screen.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
              <Card sx={{ height: "50vh", width: "22.5vw", position: "relative" }}>
                <HoverableGithubOverlay
                  image="skytunes.jpg"
                  overlayimage="website.png"
                  height="200px"
                  link="http://asd.courses.sutd.edu.sg/dti-teams/project-part-4-14/"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" fontWeight={"bold"}>
                    SkyTunes
                  </Typography>
                  <Divider />
                  <Typography color="textSecondary">Python, RPi4, SolidWorks</Typography>
                  <Typography variant="body2" component="p">
                    Interactive physical musical wall inspired from{" "}
                    <a href="https://nooknet.net/tunes" target="_blank" rel="noopener noreferrer">
                      Town Tunes
                    </a>{" "}
                    mini games from Animal Crossing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/* Grid insert projects 1. this web 2. plant tracker app 3. opencv aim bot 4. unity platformer game 5. food
            ordering app */}
        </div>

        {/* Tech Stacks */}
        <div>
          <div id="techstack" style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}></div>
          <Divider sx={{ ...dividerStyles }}>
            <Typography
              marginBottom={"5vh"}
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
              <Typography variant="h4">PostgreSQL</Typography>
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

function TechStackItem({ name, image }) {
  return (
    <div className="tech-stack-row-item animate-row">
      <img src={image} alt="Logo" />
      <Typography variant="h4">{name}</Typography>
    </div>
  );
}
export { HomeTop, HomeContent };
