import "./WelcomeSection.scss";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

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
        <h2>
          Hello
          <span className="wave-animation">👋🏻</span>
        </h2>
        <p>
          My name is Vlad and I am 27 years old. I am an ambitious &
          hard-working individual who journeyed to The Netherlands 9 years ago
          to study Computer Science. Despite initial obstacles, I've forged my
          own path, embracing learning, growth, and seizing opportunities.
        </p>
        <p>
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
          >
            Portfolio
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={buttonStyle}
            href="https://www.linkedin.com/in/vlad-hutupasu/"
            target="_blank"
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
