import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { FaReact, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
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
            <h3>
              React <FaReact />
            </h3>
            <LinearProgress variant="determinate" value={95} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>
              Angular <FaAngular />
            </h3>
            <LinearProgress variant="determinate" value={90} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>
              Typescript <BiLogoTypescript />
            </h3>
            <LinearProgress variant="determinate" value={95} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>
              JavaScript <BiLogoJavascript />
            </h3>
            <LinearProgress variant="determinate" value={90} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>
              Java <FaJava />
            </h3>
            <LinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid className="skill" item xs={6}>
            <h3>
              HTML/CSS <FaHtml5 /> <FaCss3Alt />
            </h3>
            <LinearProgress variant="determinate" value={85} />
          </Grid>
        </Grid>
      </section>
    </Box>
  );
}
