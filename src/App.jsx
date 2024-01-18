import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path={"/players/:id"} element={<SinglePlayer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
