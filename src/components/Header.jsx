import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Header() {
  const { lang, toggleLang, theme, toggleTheme, scrollToSection } = useContext(SiteContext);


  return (
    <header id="header" className="flex flex-col gap-9.5 max-w-360 mx-auto pl-31.25 pr-43.75">
      <div className="flex items-center self-end gap-2.5 mt-7.5">
        <button
          onClick={toggleTheme}
          className={`relative w-13.75 h-6 cursor-pointer rounded-full transition-all duration-400 ${
            theme === "light" ? "bg-brand-purple" : "bg-button-gray"
          }`}
        >
          <div
            className={`absolute top-1 w-3.75 h-3.75 rounded-full transition-all duration-400 
            ${theme === "dark" ? "left-1.25 bg-transparent shadow-[inset_4px_0_0_1px_#FDE047]" : "left-8.75 bg-accent-yellow"}`}
          ></div>
        </button>

        <span
          onClick={toggleTheme}
          className={`cursor-pointer select-none text-[15px] font-bold ${
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

        <span className="mx-2 font-bold text-light-gray">|</span>

        <span
          onClick={toggleLang}
          className="cursor-pointer select-none text-[15px] font-bold text-light-gray"
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
              SWITCH TO <span className={
                  theme === "light" ? "text-brand-purple" : "text-light-purple"
                }>ENGLISH</span>
            </>
          )}
        </span>
      </div>

      <div className="flex flex-col items-center w-full gap-10 min-[702px]:flex-row min-[702px]:justify-between">
        <div
          className={`flex items-center justify-center w-15.5 h-15.5 order-2 min-[702px]:order-1 rounded-full transition-colors ${
            theme === "light" ? "bg-soft-purple" : "bg-brand-purple"
          }`}
        >
          <span
            className={`inline-block rotate-30 font-bold text-2xl ${
              theme === "light" ? "text-[#7B61FF]" : "text-axios-purple"
            }`}
          >
            A
          </span>
        </div>

        <nav className="flex items-center order-1 min-[702px]:order-2 gap-7.5 lg:gap-18.75">
          <span onClick={()=>scrollToSection("skills")} className="cursor-pointer text-lg font-medium text-dim-gray">
            {lang === "en" ? "Skills" : "Beceriler"}
          </span>
          <span onClick={()=>scrollToSection("projects")} className="cursor-pointer text-lg font-medium text-dim-gray">
            {lang === "en" ? "Projects" : "Projeler"}
          </span>
          <button onClick={()=>scrollToSection("footer")}
            className={`cursor-pointer px-8 py-3 border rounded-md font-bold text-lg transition-colors 
                ${
                  theme === "light"
                    ? "text-brand-purple border-brand-purple hover:bg-brand-purple hover:text-soft-purple"
                    : "text-deep-purple bg-pure-white border-deep-purple hover:bg-soft-purple hover:text-[#1F2937]"
                }`}
          >
            {lang === "en" ? "Hire me" : "İşe al"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;