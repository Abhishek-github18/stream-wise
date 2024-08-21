import React from "react";

const TitleContainer = ({ title, synopsis }) => {
  return (
    <div className="absolute w-full bg-gradient-to-tr from-black aspect-[1/1.5] sm:aspect-video md:pt-40 lg:pt-80 top-0 pt-56 xs:pt-80 pl-4 text-white">
    <h1 className="font-bold text-2xl my-4">{title}</h1>
    <h6 className="md:inline-block text-sm xs:text-lg md:w-8/12">
      {synopsis}
    </h6>
    <div>
      <button className="hover:bg-opacity-80 hover:transition-all mr-4 my-2 p-4 md:px-8 text-xl border rounded-sm text-black bg-white">
        {" "}
        ▶ Play
      </button>
      <button className="ml-4 my-2 p-4 md:px-8 md:text-xl border rounded-sm hover:bg-white hover:text-black">
        More Info
      </button>
    </div>
  </div>
  );
};
;
export default TitleContainer;
