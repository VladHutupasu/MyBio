import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidenav from "./components/Sidenav/Sidenav";

// Inspiration from https://preview.themeforest.net/item/mugi-personal-portfolio-resume-wordpress-theme/full_screen_preview/23249443?clickid=1MmQjKQlJxyIWzu2gYQ8PX7wUkDQbkXOST13UA0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius
// And https://colorlib.com/wp/resume-website-templates/
function App() {

  return (
    <div>
      <Sidenav />
      <MainContainer />
    </div>
  );
}

export default App;
