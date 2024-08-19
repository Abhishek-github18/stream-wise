import React from "react";

const TitleContainer = ({ title, synopsis }) => {
  return (
    <div className="absolute w-full bg-gradient-to-tr from-black aspect-[1/1.5] sm:aspect-video md:pt-40 lg:pt-96 top-0 pt-56 xs:pt-80 pl-4 text-white">
    <h1 className="font-bold text-2xl my-4">{title}</h1>
    <h6 className="md:inline-block text-sm xs:text-lg md:w-8/12">
      {synopsis}
    </h6>
    <div>
      <button className="mr-4 my-2 p-4 border rounded-sm text-black bg-white">
        {" "}
        ▶ Play
      </button>
      <button className="ml-4 my-2 p-4 border rounded-sm bg-slate-400">
        More Info
      </button>
    </div>
  </div>
  );
};
;
export default TitleContainer;
