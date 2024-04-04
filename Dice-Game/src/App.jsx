import { useState } from "react";
import Home from "./components/Homepage";
import Startgame from "./components/Startgamepage";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  function toggleGame() {
    setIsGameStart((prev) => !prev);
  }
  return (
    <div>
      {
        isGameStart ? <Startgame toggle={toggleGame} /> : <Home toggle={toggleGame} />
      }
    </div>
  )
}

export default App;