import { Grid, Stack, Typography } from "@mui/material";
import "../index.css";
import { Divider } from "@mui/material";

function HomeTop() {
  return (
    <div id="top" className="top">
      <Stack
        direction="row"
        spacing={3}
        divider={<Divider variant="middle" orientation="vertical" flexItem />}
        justifyContent="flex-end"
        alignItems="center"
      >
        <div>Home</div>
        <div>Projects</div>
        <div>Tech Stack</div>
        <div>Contact</div>
      </Stack>
    </div>
  );
}

function HomeContent() {
  return (
    <div id="content" className="content" style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1707904421~exp=1707905021~hmac=d0d62cc5d1cf98939f8d0fb66bd362ba2fce00f94be2736c733f9f9a158714ab')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "15vh", // Set the height to fill the viewport
        }}
      >
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
            }}
          >
            <div>insertpic</div>
            <Typography variant="h4" fontWeight="bold">
              Nicholas Gandhi
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              Aspiring Software Engineer | Tech Enthusiast | Web App Developer
            </Typography>
            <Typography>button for resume</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            About
          </Grid>
          <Grid item xs={6}>
            Basic Information
          </Grid>
          <Grid item xs={12}>
            Content
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export { HomeTop, HomeContent };
