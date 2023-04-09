import React, { useCallback, useEffect, useState } from "react";
// import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
// import backgroundImg from "./assets/background.jpg";
// import backgroundImg from "./assets/background2.avif";
import backgroundImg from "./assets/bg.webp";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  console.log(wordToGuess);

  return (
    <div
      className="App"
      style={{
        // padding: "40px",
        backgroundImage: `url(${backgroundImg})`,
        // border: "10px solid green",
        // display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "fit-content",
          margin: "auto",
          textDecoration: "underline",
          fontFamily: "cursive",
          fontSize: "20px",
          marginTop: "-25px",
          marginBottom: "-40px",
        }}
      >
        <h1 style={{ color: "brown" }}>H</h1>
        <h1 style={{ color: "purple" }}>A</h1>
        <h1 style={{ color: "green" }}>N</h1>
        <h1 style={{ color: "blue" }}>G</h1>
        <h1 style={{ color: "red" }}>M</h1>
        <h1 style={{ color: "orange" }}>A</h1>
        <h1 style={{ color: "teal" }}>N</h1>
      </div>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          // gap: "2rem",
          gap: "1rem",
          margin: "0 auto",
          alignItems: "center",
          // border: "5px solid black",
          // padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            textAlign: "center",
            fontFamily: "cursive",
          }}
        >
          "{isWinner && "Hurray!!! You won! Press ENTER for new one.."}
          {isLoser && "Nice Try! - Press ENTER to try again"}"
        </h1>

        <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
