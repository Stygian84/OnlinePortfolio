import { Grid, Stack, Typography } from "@mui/material";
import "../index.css";
import { Divider } from "@mui/material";
import Box from "@mui/system/Box";

function HomeTop() {
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
        <div>HOME</div>
        <div>PROJECTS</div>
        <div>TECH STACK</div>
        <div>CONTACT</div>
      </Stack>
    </div>
  );
}

function HomeContent() {
  const bgLink =
    "https://png.pngtree.com/background/20211215/original/pngtree-binary-matrix-code-flow-dark-abstract-background-picture-image_1466835.jpg";
  return (
    <div id="content" className="content" style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url("${bgLink}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "25vh",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "25vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: -1,
          }}
        ></div>
        <Grid container spacing={3}>
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
            <div>insert my pic</div>
            <Typography variant="h3" fontWeight="bold" color="#00FF7F">
              Nicholas Gandhi
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
              Aspiring Software Engineer | Tech Enthusiast |{" "}
              <span style={{ whiteSpace: "nowrap" }}>Web App Developer</span>
            </Typography>
            <Typography>button for resume</Typography>
          </Grid>
        </Grid>
        <div
          style={{
            borderRadius: 1,
            border: "1px solid #4b4b4b",
            margin: "6vh",
            padding: "2.5vh 3.5vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={"#00FF7F"}
                sx={{ marginBottom: "2vh", lineHeight: "2" }}
              >
                About
              </Typography>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa felis, sagittis eget feugiat
                eget, pellentesque vestibulum orci. Sed eget ultricies enim. Proin lobortis est at arcu vestibulum, sit
                amet vehicula massa tristique. Nulla et magna erat. Vestibulum porttitor tempor feugiat. Fusce leo
                turpis, volutpat vitae dolor sit amet, auctor tristique quam. Integer sed arcu suscipit, sodales justo
                eu, maximus nisl. Morbi nec commodo ante. Nullam malesuada felis lobortis ante condimentum, interdum
                consectetur lorem venenatis. Suspendisse facilisis felis nisl, non gravida ipsum posuere eu. Aliquam
                porttitor lobortis turpis, sed convallis sapien cursus eu. Ut aliquet turpis id urna venenatis, a varius
                arcu porttitor.
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={"#00FF7F"}
                sx={{ marginBottom: "2vh", lineHeight: "2" }}
              >
                Basic Information
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: "2vh", lineHeight: "2" }}>
                Email
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: "2vh", lineHeight: "2" }}>
                Phone
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: "2vh", lineHeight: "2" }}>
                Language
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "7.5vh" }}></div>
          <Divider
            sx={{
              width: "90%",
              margin: "auto",
              textAlign: "center",
              color: "#00FF7F",
              borderColor: "#00FF7F",
              "&::before, &::after": {
                bgcolor: "#00FF7F",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Projects
            </Typography>
          </Divider>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}>Grid insert projects</div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "0 7.5vh" }}></div>
          <Divider
            sx={{
              width: "90%",
              margin: "auto",
              textAlign: "center",
              color: "00FF7F",
              borderColor: "#00FF7F",
              "&::before, &::after": {
                bgcolor: "#00FF7F",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold" color={"#00FF7F"}>
              Tech Stack
            </Typography>
          </Divider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              margin: "7.5vh",
            }}
          >
            {/* Row 1 */}
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { HomeTop, HomeContent };
