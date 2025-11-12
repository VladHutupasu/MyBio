import Box from "@mui/material/Box";
import "./Experience.scss";

export default function Experience() {
  return (
    <Box className="experience-container main-section" id="experience">
      <section className="content">
        <h2 data-aos="zoom-y-out" data-aos-delay="150">
          Experience
        </h2>
        <div className="timeline">
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>1997 👶🏻</span>
              Born in Iași, Romania
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>🫶🏻 2006 - 2015</span>
              Volunteer @{" "}
              <a
                href="https://www.fundatiasolidaritatesisperanta.ro/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#c50f6d" }}
              >
                Love and Hope Associtation
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>2012 - 2015 📚</span>
              High School Diploma, Mathematics and Computer Science @{" "}
              <a href="https://racovita.ro/" target="_blank" rel="noreferrer">
                Emil Racovita National College
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>🎓 2015 - 2018</span>
              Bachelor's degree, Computer Science @{" "}
              <a href="https://www.vu.nl" target="_blank" rel="noreferrer">
                Vrije Universiteit Amsterdam
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>2017 - 2021 📈</span>
              Full Stack Developer @{" "}
              <a
                href="https://www.lynx.nl"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#02c878" }}
              >
                LYNX B.V.
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>🏦 2021 - 2023</span>
              Front-end Developer @{" "}
              <a
                href="https://www.rabobank.nl"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fa6705" }}
              >
                Rabobank
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>2023 - 2024 🏦</span>
              Full-Stack Area Developer @{" "}
              <a
                href="https://www.rabobank.nl"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fa6705" }}
              >
                Rabobank
              </a>
            </p>
          </div>
          <div>
            <p data-aos="zoom-y-out" data-aos-delay="150">
              <span>✈️ 2025 - ...</span>
              Full-Stack Developer @{" "}
              <a
                href="https://flights.booking.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#006ce4" }}
              >
                Booking.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Box>
  );
}
