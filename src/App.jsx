import React from "react";
import "./styles/App.css";
import LandingPage from "./pages/landing-page";
import FightPage from "./pages/fight-page";

function App() {
  const [page, setPage] = React.useState(true);

  return (
    <div className="App">
      {page ? <LandingPage setPage={setPage} /> : <FightPage />}
    </div>
  );
}

export default App;
