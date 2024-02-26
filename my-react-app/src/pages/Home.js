import { Grid, Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { Divider } from "@mui/material";
import Box from "@mui/system/Box";
import myPic from "../images/myPic.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import HoverableGithubOverlay from "../components/HoverableGithubOverlay";
import { useIntersectionObserver } from "../components/useIntersectionObserver";
import MatrixAnimation from "../components/Matrix";
import BinaryAnimation from "../components/BinaryAnimation";
import Puzzle from "../components/15Puzzle";
import { useMediaQuery } from "@mui/material";

function HomeTop() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    setShowTop(true);
  }, []);
  // Scroll for Top Bar
  const handleClick = (targetID) => {
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      // targetElement.scrollIntoView({ behavior: "smooth" });
      targetElement.scrollIntoView();
    } else {
      console.error(`Element with ID '${targetID}' not found.`);
    }
  };

  return (
    <div id="top" className={`top ${showTop ? "show" : ""}`}>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="flex-end"
        alignItems="center"
        letterSpacing={"4px"}
        color="#00FF7F"
      >
        <div onClick={() => handleClick("home")}>HOME</div>
        <div onClick={() => handleClick("projects")}>PROJECTS</div>
        <div onClick={() => handleClick("techstack")}>TECH STACK</div>
        <div onClick={() => handleClick("contact")}>CONTACT</div>
        <div onClick={() => handleClick("minigame")}>MINI GAME</div>
      </Stack>
    </div>
  );
}

function HomeContent() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [showAbout, setShowAbout] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const gridRefHeader1 = useRef(null);
  const gridRefHeader2 = useRef(null);
  const gridRefProject1 = useRef(null);
  const gridRefProject2 = useRef(null);
  const gridRefProject3 = useRef(null);
  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const gridRef3 = useRef(null);
  const gridRef4 = useRef(null);
  const gridRef5 = useRef(null);

  const slideDuration = 1000; // Adjust as needed
  const isVisible1 = useIntersectionObserver(gridRef1, slideDuration);
  const isVisible2 = useIntersectionObserver(gridRef2, slideDuration);
  const isVisible3 = useIntersectionObserver(gridRef3, slideDuration);
  const isVisible4 = useIntersectionObserver(gridRef4, slideDuration);
  const isVisible5 = useIntersectionObserver(gridRef5, slideDuration);
  const projectVisible1 = useIntersectionObserver(gridRefProject1, slideDuration);
  const projectVisible2 = useIntersectionObserver(gridRefProject2, slideDuration);
  const projectVisible3 = useIntersectionObserver(gridRefProject3, slideDuration);
  const headerVisible1 = useIntersectionObserver(gridRefHeader1, slideDuration);
  const headerVisible2 = useIntersectionObserver(gridRefHeader2, slideDuration);

  useEffect(() => {
    setShowAbout(true);
  }, []);
  // Resume Download
  const handleDownload = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "NicholasGandhi_Resume.pdf";
    anchor.click();
  };

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
  const projectCardContentStyle = { backgroundColor: "#f8f9fa", height: "100%" };
  return (
    // Title and Background Part
    <div id="content" className="content" style={{ position: "relative" }}>
      <BinaryAnimation />
      <div id="home">
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
            <div className="circle" style={{ backgroundImage: `url(${myPic})`, boxShadow: `0 0 1px 1px #00FF7F` }}>
              {" "}
            </div>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#00FF7F"
              textAlign={"center"}
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Nicholas Peradidjaya
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
              Aspiring Software Engineer | Tech Enthusiast |{" "}
              <span style={{ whiteSpace: "nowrap" }}>Web App Developer</span>
            </Typography>
            <div className="resume-button" onClick={handleDownload}>
              Resume
            </div>
            <div id="icon-circle-container" style={{ display: "flex", marginTop: "5vh" }}>
              <div
                className="icon-circle"
                style={{
                  backgroundImage: `url(${github})`,
                  backgroundColor: "black",
                }}
                onClick={() => {
                  window.open("https://github.com/stygian84", "_blank");
                }}
              />
              <div id="circle-separator" style={{ width: "10vw" }}>
                {" "}
              </div>

              <div
                className="icon-circle"
                style={{ backgroundImage: `url(${linkedin})` }}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/nicholas-gandhi-peradidjaya/", "_blank");
                }}
              />
            </div>
          </Grid>
        </Grid>
        {/* About Me Box */}
        <div id="about-box" className={`${showAbout ? "bounce-from-below" : ""}`}>
          <div id="about-box-child" style={{ display: "flex", justifyContent: "space-between" }}>
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
          <div
            ref={gridRefHeader1}
            id="projects"
            style={{ display: "flex", justifyContent: "space-evenly", margin: "7.5vh" }}
          ></div>
          <Divider sx={{ ...dividerStyles }} className={headerVisible1 ? "bounce-from-below" : ""}>
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={"5vh"}
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Projects
            </Typography>
          </Divider>
          <div id="description-projects" style={{ display: "flex", justifyContent: "center", marginBottom: "5vh", textAlign: "justify" }}>
            <Typography variant="h6">
              Hover over and click the projects' picture to view the GitHub source code / website.
            </Typography>
          </div>

          {/* Projects First Row */}
          <div ref={gridRefProject1} className={projectVisible1 ? "slide-in" : ""}>
            <Grid
              container
              direction={isSmallScreen ? "column" : ""}
              className="projects-grid"
              spacing={6}
              justifyContent="center"
              marginBottom={"5vh"}
            >
              <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="web.png"
                    overlayimage="github.png"
                    height="200px"
                    link="https://github.com/Stygian84/OnlinePortfolio"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
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
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="planttracker (1).jpg"
                    overlayimage="github.png"
                    overlayimage2="website.png"
                    height="200px"
                    link="https://github.com/Stygian84/PlantTrackerApp"
                    link2="https://planttracker.netlify.app"
                    double={true}
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
                    <Typography variant="h5" component="h2" fontWeight={"bold"}>
                      Plant Tracker App
                    </Typography>
                    <Divider />
                    <Typography color="textSecondary">React, ExpressJS, PostgreSQL, Python</Typography>
                    <Typography variant="body2" component="p">
                      Simple mobile web app to monitor the health of plants where the data are stored in a database.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="platformer.png"
                    overlayimage="github.png"
                    overlayimage2="youtube.png"
                    height="200px"
                    link="https://github.com/Stygian84/PlatformerGame"
                    link2="https://youtu.be/ikF48N-eQj0"
                    double={true}
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
                    <Typography variant="h5" component="h2" fontWeight={"bold"}>
                      Platformer Game
                    </Typography>
                    <Divider />
                    <Typography color="textSecondary">Unity, C#</Typography>
                    <Typography variant="body2" component="p">
                      Simple platformer game where the player needs to collect collectibles and kill a boss to finish
                      the game.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>

          {/* Projects Second Row */}
          <div ref={gridRefProject2} className={projectVisible2 ? "slide-in-from-left" : ""}>
            <Grid
              container
              spacing={6}
              direction={isSmallScreen ? "column" : ""}
              justifyContent="center"
              marginBottom={"10vh"}
            >
              <Grid item xs={3} style={{ ...projectCardContainerStyless }}>
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="wepack4u.png"
                    overlayimage="github.png"
                    height="200px"
                    link="https://github.com/bojx96/WePack4U"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
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
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="aimbot.jpg"
                    overlayimage="github.png"
                    height="200px"
                    link="https://github.com/Stygian84/AimBotTest"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
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
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="skytunes.jpg"
                    overlayimage="website.png"
                    height="200px"
                    link="http://asd.courses.sutd.edu.sg/dti-teams/project-part-4-14/"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
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
          </div>

          {/* Projects Third Row */}
          <div ref={gridRefProject3} className={projectVisible3 ? "slide-in" : ""}>
            <Grid
              container
              spacing={8}
              direction={isSmallScreen ? "column" : ""}
              justifyContent="center"
              marginBottom={"10vh"}
            >
              <Grid item xs={4} style={{ ...projectCardContainerStyless }}>
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="fpga.png"
                    overlayimage="github.png"
                    height="200px"
                    link="https://github.com/Stygian84/FPGA-Group-14"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
                    <Typography variant="h5" component="h2" fontWeight={"bold"}>
                      FPGA Arcade Game
                    </Typography>
                    <Divider />
                    <Typography color="textSecondary">Lucid, Verilog, Python</Typography>
                    <Typography variant="body2" component="p">
                      Wordle-inspired arcade game made using Alchitry.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} style={{ ...projectCardContainerStyless }}>
                <Card sx={{ height: "50vh", width: isSmallScreen ? "85vw" : "30vw", position: "relative" }}>
                  <HoverableGithubOverlay
                    image="githubprofile.png"
                    overlayimage="github.png"
                    height="200px"
                    link="https://github.com/Stygian84/LoyaltyApp"
                  />
                  <CardContent style={{ ...projectCardContentStyle }}>
                    <Typography variant="h5" component="h2" fontWeight={"bold"}>
                      Loyalty App
                    </Typography>
                    <Divider />
                    <Typography color="textSecondary">Go, JS, CSS, SQL</Typography>
                    <Typography variant="body2" component="p">
                      Collaborate with a team of 5 to create a loyalty web app.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* Tech Stacks */}
        <div>
          <div
            ref={gridRefHeader2}
            id="techstack"
            style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}
          ></div>
          <Divider sx={{ ...dividerStyles }} className={headerVisible2 ? "bounce-from-below" : ""}>
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
          <div
            ref={gridRef1}
            className={isVisible1 ? "tech-stack-row-container slide-in-from-left" : "tech-stack-row-container"}
          >
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

          <div ref={gridRef2} className={isVisible2 ? "tech-stack-row-container slide-in" : "tech-stack-row-container"}>
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

          <div
            ref={gridRef3}
            className={isVisible3 ? "tech-stack-row-container slide-in-from-left" : "tech-stack-row-container"}
          >
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

          <div
            ref={gridRef4}
            className={isVisible4 ? "tech-stack-row-container2 slide-in" : "tech-stack-row-container2"}
          >
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/mongodb.jpg")} alt="Logo" /> <Typography variant="h4">MongoDB</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/go.png")} alt="Logo" /> <Typography variant="h4">Go</Typography>
            </div>
          </div>
          <div
            ref={gridRef5}
            className={isVisible5 ? "tech-stack-row-container2 slide-in-from-left" : "tech-stack-row-container2"}
          >
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/nodejs.jpg")} alt="Logo" /> <Typography variant="h4">NodeJS</Typography>
            </div>
            <div className="tech-stack-row-item animate-row">
              <img src={require("../images/express.png")} alt="Logo" /> <Typography variant="h4">ExpressJS</Typography>
            </div>
          </div>
        </div>

        {/* Mini Game */}
        <div>
          <div ref={gridRefHeader2} id="minigame"></div>
          <Divider sx={{ ...dividerStyles }} className={headerVisible2 ? "bounce-from-below" : ""}>
            <Typography
              marginBottom={"5vh"}
              variant="h4"
              fontWeight="bold"
              color={"#00FF7F"}
              sx={{ textShadow: "2px 2px 4px rgba(0, 255, 127, 0.5)" }}
            >
              Mini Game
            </Typography>
          </Divider>
          <Puzzle />
        </div>
        <MatrixAnimation />
      </div>
    </div>
  );
}

export { HomeTop, HomeContent };
