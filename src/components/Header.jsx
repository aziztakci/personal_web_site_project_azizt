import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Header() {
  const { lang, toggleLang, theme, toggleTheme } = useContext(SiteContext);

  return (
    <header
      className={`max-w-360 mx-auto flex flex-col gap-9.5 pl-6.25 pr-12.5 md:pl-31.25 md:pr-43.75 ${theme === "dark" ? "bg-[#1F2937]" : "bg-white"}`}
    >
      <div className="flex items-center gap-2.5 self-end mt-7.5">
        <button
          onClick={toggleTheme}
          className="relative w-13.75 h-6 bg-brand-purple rounded-full cursor-pointer transition-all duration-300"
        >
          <div
            className={`absolute top-1 w-3.75 h-3.75 bg-accent-yellow rounded-full transition-all duration-300 
            ${theme === "light" ? "left-1.25" : "left-8.75"}`}
          ></div>
        </button>

        <span
          onClick={toggleTheme}
          className="text-light-gray text-[15px] font-bold cursor-pointer select-none"
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
              <span className="text-brand-purple">TÜRKÇE</span>
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
        <div className="w-15.5 h-15.5 bg-soft-purple rounded-full flex items-center justify-center">
          <span className="text-[#7B61FF] font-bold text-2xl inline-block rotate-30">
            A
          </span>
        </div>

        <nav className="flex gap-7.5 md:gap-18.75 items-center">
          <span
            className={`font-medium text-lg cursor-pointer ${theme === "light" ? "text-dim-gray" : "text-soft-purple"}`}
          >
            {lang === "en" ? "Skills" : "Beceriler"}
          </span>
          <span
            className={`font-medium text-lg cursor-pointer ${theme === "light" ? "text-dim-gray" : "text-soft-purple"}`}
          >
            {lang === "en" ? "Projects" : "Projeler"}
          </span>
          <button
            className={` border-2 px-8 py-3 rounded-md font-bold text-lg cursor-pointer 
                ${
                  theme === "light"
                    ? "text-brand-purple hover:bg-brand-purple hover:text-soft-purple transition-colors  border-brand-purple"
                    : "text-soft-purple hover:bg-soft-purple hover:text-[#1F2937] transition-colors  border-soft-purple"
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
