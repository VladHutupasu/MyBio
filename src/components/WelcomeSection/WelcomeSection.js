import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./WelcomeSection.scss";

const buttonStyle = {
  marginRight: "10px",
  border: "solid 3px",
  fontWeight: "800",
  textTransform: "uppercase",
};

export default function WelcomeSection() {
  return (
    <Box className="welcome-container main-section" id="home">
      <section>
        <div data-aos="zoom-y-out" data-aos-delay="150">
          <h2>
            Hello
            <span className="wave-animation">👋🏻</span>
          </h2>
        </div>

        <p data-aos="zoom-y-out" data-aos-delay="300">
          My name is Vlad and I am 27 years old. I am an ambitious &
          hard-working individual who journeyed to The Netherlands 9 years ago
          to study Computer Science. Despite initial obstacles, I've forged my
          own path, embracing learning, growth, and seizing opportunities.
        </p>
        <p data-aos="zoom-y-out" data-aos-delay="450">
          I may not have all the answers, but I am eager to learn and tackle any
          challenge that comes my way. My determination and work ethic ensures I
          conquer anything I set my mind to.
        </p>
        <div>
          <Button
            variant="contained"
            size="large"
            sx={buttonStyle}
            href="https://vladhutupasu.tiiny.site/"
            target="_blank"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Portfolio
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={buttonStyle}
            href="https://www.linkedin.com/in/vlad-hutupasu/"
            target="_blank"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Hire me
          </Button>
        </div>
        <div className="mouse-container">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </div>
      </section>
    </Box>
  );
}
