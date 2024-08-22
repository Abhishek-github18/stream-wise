import React from "react";
import { Home_Bg_Image } from "../utils/constants";
import {useSelector} from "react-redux";
import { LanguageConstants } from "../utils/LanguageConstants";
const GptSearch = () => {
    const lang = useSelector((state)=>state.appConfig.language);
  return (
    <div className="flex justify-center">
      <div className="w-screen h-screen absolute flex justify-center">
        <img
          className="w-full h-full object-cover -z-20"
          src={Home_Bg_Image}
          alt="Bg-Image"
        />
      </div>
      <div className="bg-black text-white mt-28 rounded-lg xl:w-6/12 w-10/12 absolute z-10 ">
        <form>
          <input
            className="xl:mx-8 xl:my-4 mt-4 ml-4 w-10/12 p-4 md:w-6/12 xl:w-6/12 text-black"
            type="text"
            placeholder={LanguageConstants[lang].gptSearchPlaceholder}

          />
          <button className="mx-4 my-4 bg-red-700 md:ml-20 md:px-16 rounded-lg p-4 px-8" >
            {LanguageConstants[lang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
