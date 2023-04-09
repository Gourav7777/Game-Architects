import React from "react";

const Header = ({ score, compScore }: { score: number; compScore: number }) => {
  return (
    <div>
      <div
        className=" p-2  gap-5 rounded-lg sm:flex sm:visible justify-between items-center hidden "
      >
        <div className="font-bold border-4 border-lime-900	 bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-4 py-2">
          <span className="text-skin-score text-md tracking-widest">
            Your:SCORE
          </span>
          <span className="text-skin-dark" style={{ fontSize: 62 }}>
            {score}
          </span>
        </div>
        <div className="font-bold border-4 border-lime-900	 bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-4 py-2">
          <span className="text-skin-score text-md tracking-widest">
            Comp:SCORE
          </span>
          <span className="text-skin-dark" style={{ fontSize: 62 }}>
            {compScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
