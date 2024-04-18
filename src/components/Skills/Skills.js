import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import LinearProgress from "@mui/material/LinearProgress";
import "./Skills.scss";

export default function Skills() {
  return (
    <Box className="skills-container main-section" id="skills">
      <section className="content">
        <h2 data-aos="zoom-y-out" data-aos-delay="150">
          Skills
        </h2>
        <Grid container spacing={4} data-aos="zoom-y-out" data-aos-delay="300">
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
