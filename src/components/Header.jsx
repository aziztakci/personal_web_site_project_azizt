import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Header() {
  const { lang, toggleLang, theme, toggleTheme } = useContext(SiteContext);

  return (
    <header className="flex flex-col gap-9.5">
      <div className="flex items-center gap-2.5 self-end mt-7.5">
        <button
          onClick={toggleTheme}
          className={`relative w-13.75 h-6  rounded-full cursor-pointer transition-all duration-400 ${
            theme === "light" ? "bg-brand-purple" : "bg-button-gray"
          }`}
        >
          <div
            className={`absolute top-1 w-3.75 h-3.75 bg-accent-yellow rounded-full transition-all duration-400 
            ${theme === "dark" ? "left-1.25 bg-transparent shadow-[inset_4px_0_0_0_#FDE047]" : "left-8.75"}`}
          ></div>
        </button>

        <span
          onClick={toggleTheme}
          className={` text-[15px] font-bold cursor-pointer select-none ${
            theme === "light" ? "text-light-gray" : "text-bright-gray"
          }`}
        >
          {lang === "en"
            ? theme === "light"
              ? "DARK MODE"
              : "LIGHT MODE"
            : theme === "light"
              ? "GECE MODU"
              : "GÜNDÜZ MODU"}
        </span>

        <span className="text-light-gray mx-2 font-bold">|</span>

        <span
          onClick={toggleLang}
          className="text-light-gray text-[15px] font-bold cursor-pointer select-none"
        >
          {lang === "en" ? (
            <>
              <span
                className={
                  theme === "light" ? "text-brand-purple" : "text-light-purple"
                }
              >
                TÜRKÇE
              </span>
              'YE GEÇ
            </>
          ) : (
            <>
              <span className="text-brand-purple">ENGLISH</span>
            </>
          )}
        </span>
      </div>

      <div className="flex justify-between items-center w-full">
        <div
          className={`w-15.5 h-15.5 flex items-center justify-center rounded-full transition-colors ${
            theme === "light" ? "bg-soft-purple" : "bg-brand-purple"
          }`}
        >
          <span
            className={`font-bold text-2xl inline-block rotate-30 ${
              theme === "light" ? "text-[#7B61FF]" : "text-axios-purple"
            }`}
          >
            A
          </span>
        </div>

        <nav className="flex gap-7.5 md:gap-18.75 items-center">
          <span className="font-medium text-lg cursor-pointer text-dim-gray">
            {lang === "en" ? "Skills" : "Beceriler"}
          </span>
          <span className=" text-dim-gray font-medium text-lg cursor-pointer">
            {lang === "en" ? "Projects" : "Projeler"}
          </span>
          <button
            className={` border px-8 py-3 rounded-md font-bold text-lg cursor-pointer 
                ${
                  theme === "light"
                    ? "text-brand-purple hover:bg-brand-purple hover:text-soft-purple transition-colors  border-brand-purple"
                    : "text-deep-purple bg-pure-white hover:bg-soft-purple hover:text-[#1F2937] transition-colors  border-deep-purple"
                }`}
          >
            {lang === "en" ? "Hire me" : "Beni işe al"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
