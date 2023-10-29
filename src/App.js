import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimonGame from "./components/SimonGame";
import Home from "./components/Home";
import Login from "./components/Login";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<SimonGame />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
