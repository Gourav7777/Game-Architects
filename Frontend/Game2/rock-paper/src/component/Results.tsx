import React from "react";

const Results = ({ gameResult }: { gameResult: string }) => {
  return (
    <>
      <div
        style={{ maxWidth: "40em" }}
        className="w-full  border-4 border-gray-500 rounded-lg sm:flex sm:visible justify-between items-center hidden"
      >
        <div className="font-bold bg-green-700 flex flex-col items-center rounded-lg leading-tight px-4 py-2">
          <span className="text-skin-score text-md tracking-widest">
            Result
          </span>
          <span className="text-skin-dark" style={{ fontSize: 62 }}>
            {gameResult}
          </span>
        </div>
      </div>
    </>
  );
};

export default Results;
