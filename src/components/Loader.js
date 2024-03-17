import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-2 my-[200px] w-screen h-screen">
        <div className="loader "> </div>
        <p className="  text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};
