import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NewPlayerForm from "./components/NewPlayerForm.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path={"/players/:id"} element={<SinglePlayer />} />
          <Route path="/form" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
