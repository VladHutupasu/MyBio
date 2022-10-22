import Box from "@mui/material/Box";
import Skills from "../Skills/Skills";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./MainContainer.scss";

export default function MainContainer(props) {
  const drawerWidth = props.drawerWidth;

  return (
    <Box className="container" style={{ marginLeft: drawerWidth }}>
      <WelcomeSection />
      <WelcomeSection />
      <Skills />
    </Box>
  );
}
