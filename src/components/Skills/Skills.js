import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./Skills.scss";
import Grid from "@mui/material/Grid"; // Grid version 1

export default function Skills() {
  return (
    <Box className="skills-container main-section" id="skills">
      <section className="content">
        <h2>Skills</h2>
        <Grid container spacing={4}>
          <Grid className="skill" item xs={6}>
            <h3>JavaScript</h3>
            <LinearProgress variant="determinate" value={80} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>Typescript</h3>
            <LinearProgress variant="determinate" value={85} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>Java</h3>
            <LinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>HTML/CSS</h3>
            <LinearProgress variant="determinate" value={85} />
          </Grid>
        </Grid>
      </section>
    </Box>
  );
}
