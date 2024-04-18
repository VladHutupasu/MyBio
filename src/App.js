import AOS from "aos";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidenav from "./components/Sidenav/Sidenav";

function App() {
  useEffect(() => {
    // Initialise AOS animations
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Initialise Google Analytics
    ReactGA.initialize("G-YEZXZT7070");
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });
  }, []);

  return (
    <div>
      <Sidenav />
      <MainContainer />
    </div>
  );
}

export default App;
