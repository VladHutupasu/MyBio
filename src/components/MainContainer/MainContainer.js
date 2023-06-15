import Box from "@mui/material/Box";
import Experience from "../Experience/Experience";
import FunFacts from "../FunFacts/FunFacts";
import Skills from "../Skills/Skills";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./MainContainer.scss";

export default function MainContainer() {

  return (
    <Box className="main-container">
      <WelcomeSection />
      <Skills />
      <Experience />
      <FunFacts />
    </Box>
  );
}
