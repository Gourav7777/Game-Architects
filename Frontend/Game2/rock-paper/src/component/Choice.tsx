import React from "react";
import paper from "../image/paper.png";
import scissors from "../image/sessor.png";
import rock from "../image/rock.png";
const Choice = ({ startGame }: { startGame: (choice: number) => void }) => {
  return (
    <div className="hidden sm:block">
      <div className="grid grids-cols-4 place-items-center w-max relative ">
        <div
          className={`col-span-2 mx-7 relative  cursor-pointer rounded-full`}
        >
          <button
            onClick={() => startGame(0)}
            type="button"
            className="hover:bg-green-700 rounded-lg bg-gray-600 text-white py-3 px-12 tracking-widest text-lg"
          >
            Paper
          </button>
        </div>
        <div className={`col-span-2 relative  cursor-pointer`}>
          <button
            onClick={() => startGame(1)}
            type="button"
            className="hover:bg-green-700 rounded-lg bg-gray-600 text-white py-3 px-11 tracking-widest text-lg"
          >
            Scissor
          </button>
        </div>
        <div className={`col-span-4 relative  cursor-pointer mt-7`}>
          <button
            onClick={() => startGame(2)}
            type="button"
            className="hover:bg-green-700 rounded-lg bg-gray-600 text-white py-3 px-14 tracking-widest text-lg"
          >
            Rock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choice;
