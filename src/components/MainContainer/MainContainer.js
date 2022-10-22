import Box from "@mui/material/Box";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./MainContainer.scss";

export default function MainContainer(props) {
  const drawerWidth = props.drawerWidth;

  return (
    <Box style={{ marginLeft: drawerWidth }}>
      <WelcomeSection />
      <Skills />
      <Experience />
    </Box>
  );
}
