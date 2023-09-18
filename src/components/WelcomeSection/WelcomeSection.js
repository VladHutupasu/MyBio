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
        <h2>Hello 👋🏻</h2>
        <p>
          My name is Vlad and I am 26 years old. I am an ambitious and
          hard-working person that came in The Netherlands 8 years ago in order
          to study Computer Science. I came here, not being totally supported by
          my parents, to learn, develop myself and take on challenges and
          opportunities. Being determined, I managed to create a life of my own,
          even though in the beginning it was not easy.
        </p>
        <p>
          Always ready to learn something new, something useful, to gain
          experience and knowledge. I may not know everything, but I can tell
          you that I am hard-working and I can accomplish everything that I put
          my mind into.
        </p>
        <div>
          <Button variant="contained" size="large" sx={buttonStyle} href="https://vladhutupasu.tiiny.site/" target="_blank">
            Portfolio
          </Button>
          <Button variant="outlined" size="large" sx={buttonStyle} href="https://www.linkedin.com/in/vlad-hutupasu/" target="_blank">
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
