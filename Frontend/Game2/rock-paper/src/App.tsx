import React, { useEffect, useState } from "react";
import Header from "./component/header";
import paper from "../src/image/paper.png";
import scissors from "../src/image/sessor.png";
import rock from "../src/image/rock.png";
import Choice from "./component/Choice";
import Results from "./component/Results";
import ChoiceShow from "./component/ChoiceShow";

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [useChoice, setUserChoice] = useState({ img: "" });
  const [ComChoice, setComChoice] = useState({ img: "" });
  const [score, setScore] = useState(0);
  const [compScore, setcomScore] = useState(0);
  const [gameResult, setGameResult] = useState("");
  const [count, setCount] = useState(0);

  const startGame = (choice: Number) => {
    if (gameStart) {
      setCount(count + 1);
      if (choice === 0) {
        setUserChoice({ img: paper });
      } else if (choice === 1) {
        setUserChoice({ img: scissors });
      } else {
        setUserChoice({ img: rock });
      }
      const random = Math.floor(Math.random() * 3);
      if (random === 0) {
        setComChoice({ img: paper });
      } else if (random === 1) {
        setComChoice({ img: scissors });
      } else {
        setComChoice({ img: rock });
      }
      const timeout = setTimeout(() => {
        if (choice == random) {
          setScore(score + 0.5);
          setcomScore(compScore + 0.5);
        } else if (
          (choice == 0 && random == 2) ||
          (choice == 1 && random == 0) ||
          (choice == 2 && random == 1)
        ) {
          setScore(score + 1);
        } else {
          setcomScore(compScore + 1);
        }
        // console.log(count)
        if (count == 6 && score > compScore) {
          setGameResult("You Won");
        } else if (count == 6 && score < compScore) {
          setGameResult("Com Won");
        } else if (count == 6 && score == compScore) {
          setGameResult("Game Tie");
        }
      }, 1000);
      return timeout;
    }
  };

  const endGame = () => {
    setScore(0);
    setcomScore(0);
    setGameResult("");
    setGameStart(false);
    setCount(0);
    setUserChoice({ img: "" });
    setComChoice({ img: "" });
  };
  return (
    <div className="flex   items-center h-screen bg-gradient-to-b from-violet-500 to-orange-500">
      <div className="flex flex-col gap-3 justify-center items-center w-full ">
        <h1 className="text-2xl font-bold text-yellow-400 ">ROCK PAPER & SCISSIOR GAME</h1>
        <div>
          <ChoiceShow imgUser={useChoice.img} imgCom={ComChoice.img} />
        </div>
        <div>
          <Header score={score} compScore={compScore} />
        </div>
        <div>
          {gameResult ? (
            <Results gameResult={gameResult} />
          ) : (
            <Choice startGame={startGame} />
          )}
        </div>
        <div>
          {gameStart ? (
            <button
              onClick={endGame}
              type="button"
              className="hover:bg-red-700 rounded-lg bg-gray-900 text-white py-3 px-14 tracking-widest text-lg"
            >
              End Game
            </button>
          ) : (
            <button
              onClick={() => setGameStart(true)}
              type="button"
              className="hover:bg-green-700 rounded-lg bg-gray-900 text-white py-3 px-14 tracking-widest text-lg"
            >
              Start Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
