import Box from "@mui/material/Box";
import "./Experience.scss";

export default function Experience() {
  return (
    <Box className="experience-container main-section" id="experience">
      <section className="content">
        <h2>Experience</h2>
        <div className="timeline">
          <p>
            <span>1997 👶🏻</span>
            Born in Iași, Romania
          </p>
          <p>
            <span>🫶🏻 2006 - 2015</span>
            Volunteer @ <a href="https://www.fundatiasolidaritatesisperanta.ro/" target="_blank" rel="noreferrer" style={{color: "#c50f6d"}}>Love and Hope Associtation</a>
          </p>
          <p>
            <span>2012 - 2015 📚</span>
            High School Diploma, Mathematics and Computer Science @ <a href="https://racovita.ro/" target="_blank" rel="noreferrer">Emil
            Racovita National College</a>
          </p>
          <p>
            <span>🎓 2015 - 2018</span>
            Bachelor's degree, Computer Science @ <a href="https://www.vu.nl" target="_blank" rel="noreferrer">Vrije Universiteit Amsterdam</a>
          </p>
          <p>
            <span>2017 - 2021 💼</span>
            Full Stack Developer @ <a href="https://www.lynx.nl" target="_blank" rel="noreferrer" style={{color: "#02c878"}}>LYNX B.V.</a>
          </p>
          <p>
            <span>💼 2021 - 2023</span>
            Front-end Developer @ <a href="https://www.rabobank.nl" target="_blank" rel="noreferrer" style={{color: "#fa6705"}}>Rabobank</a>
          </p>
          <p>
            <span>2023 - ... 💼</span>
            Full-Stack Area Developer @ <a href="https://www.rabobank.nl" target="_blank" rel="noreferrer" style={{color: "#fa6705"}}>Rabobank</a>
          </p>
        </div>
      </section>
    </Box>
  );
}
