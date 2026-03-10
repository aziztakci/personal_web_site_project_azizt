import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Header() {
  const { lang, toggleLang, theme, toggleTheme } = useContext(SiteContext);

  return (
    <header className="max-w-[1440px] mx-auto flex flex-col gap-[38px] pl-[25px] pr-[50px] md:pl-[125px] md:pr-[175px]">
      <div className="flex items-center gap-[10px] self-end mt-[30px]">
        <button
          onClick={toggleTheme}
          className="relative w-[55px] h-[24px] bg-[var(--color-brand-purple)] rounded-full cursor-pointer transition-all duration-300"
        >
          <div
            className={`absolute top-[4px] w-[15px] h-[15px] bg-[var(--color-accent-yellow)] rounded-full transition-all duration-300 
            ${theme === "light" ? "left-[5px]" : "left-[35px]"}`}
          ></div>
        </button>

        <span
          onClick={toggleTheme}
          className="text-[var(--color-light-gray)] text-[15px] font-bold cursor-pointer select-none"
        >
          {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
        </span>

        <span className="text-[var(--color-light-gray)] mx-2 font-bold">|</span>

        <span
          onClick={toggleLang}
          className="text-[var(--color-light-gray)] text-[15px] font-bold cursor-pointer select-none"
        >
          {lang === "en" ? (
            <>
              <span className="text-[var(--color-brand-purple)]">TÜRKÇE</span>
              'YE GEÇ
            </>
          ) : (
            <>
              <span className="text-[var(--color-brand-purple)]">ENGLISH</span>
            </>
          )}
        </span>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="w-[62px] h-[62px] bg-[var(--color-soft-purple)] rounded-full flex items-center justify-center">
          <span className="text-[#7B61FF] font-bold text-2xl inline-block rotate-[30deg]">
            A
          </span>
        </div>

        <nav className="flex gap-[30px] md:gap-[75px] items-center">
          <span className="text-[var(--color-dim-gray)] font-medium text-lg cursor-pointer">
            Skills
          </span>
          <span className="text-[var(--color-dim-gray)] font-medium text-lg cursor-pointer">
            Projects
          </span>
          <button className="text-[var(--color-brand-purple)] border-2 border-[var(--color-brand-purple)] px-[32px] py-[12px] rounded-md font-bold text-lg cursor-pointer hover:bg-[var(--color-brand-purple)] hover:text-white transition-colors">
            Hire me
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
