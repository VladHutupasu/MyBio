import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./Experience.scss";
import Grid from "@mui/material/Grid"; // Grid version 1

export default function Experience() {
  return (
    <Box className="experience-container">
      <section className="content">
        <h2>Experience</h2>
        <Grid container spacing={4}>
          <Grid className="skill" item xs={6}>
            <h3>JavaScript</h3>
            <LinearProgress variant="determinate" value={30} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>Typescript</h3>
            <LinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>Java</h3>
            <LinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>Coding</h3>
            <LinearProgress variant="determinate" value={50} />
          </Grid>
        </Grid>
      </section>
    </Box>
  );
}
