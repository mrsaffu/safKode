import "./App.css";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { CursorFollower } from "./components/CursorFollower";
import { ParticleEffect } from "./components/ParticleEffect";
import { SpotlightGlow } from "./components/SpotlightGlow";
import { Dashboard } from "./components/Dashboard";
import "./styles/portfolio.css";
import "./styles/cursor.css";
function App() {
  return (
    <>
      <main className="portfolio-main">
        <CursorFollower />
        <ParticleEffect />
        <SpotlightGlow />
        <Landing />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
