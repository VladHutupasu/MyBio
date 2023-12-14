import Box from "@mui/material/Box";
import "./FunFacts.scss";

export default function FunFacts() {
  const iconSize = "40px";

  return (
    <Box className="fun-facts-container main-section" id="fun-facts">
      <section className="content">
        <h2>Fun Facts</h2>
        <section className="fun-facts">
          <div>
            <span style={{ fontSize: iconSize }}>☕️</span>
            <span className="fun-fact-number">1421</span>
            <span className="fun-fact-description">Coffees</span>
          </div>
          <div>
            <span style={{ fontSize: iconSize }}>🧳</span>
            <span className="fun-fact-number">26</span>
            <span className="fun-fact-description">Countries</span>
          </div>
          <div>
            <span style={{ fontSize: iconSize }}>🐱</span>
            <span className="fun-fact-number">1</span>
            <span className="fun-fact-description">Pets</span>
          </div>
        </section>
      </section>
    </Box>
  );
}
