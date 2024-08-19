import React from "react";

const TitleContainer = ({ title, synopsis }) => {
  return (
    <div className="my-40 mx-4">
      <h1 className="font-bold my-4">{title}</h1>
      <h6 className="md:inline-block md:w-8/12">{synopsis}</h6>
      <div>
        <button className="mr-4 my-2 p-4 border rounded-sm text-black"> ▶ Play</button>
        <button className="ml-4 my-2 p-4 border rounded-sm bg-slate-400">More Info</button>
      </div>
    </div>
  );
};

export default TitleContainer;
