import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Hero() {
  const { siteData, lang, theme, scrollToSection } = useContext(SiteContext);
  const heroData = siteData[lang].heroSection;

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-17 mt-10 xl:mt-23.25 max-w-360 mx-auto pl-31.25 pr-43.75">
      <div className="flex flex-col order-2 xl:order-1 gap-10">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-25.5 h-0.5 ${
              theme === "light" ? "bg-indigoo" : "bg-indigoo-subtle"
            }`}
          ></div>
          <span
            className={`text-xl font-semibold ${
              theme === "light" ? "text-indigoo" : "text-indigoo-subtle"
            }`}
          >
            {heroData.name}
          </span>
        </div>
        <div className="flex flex-col">
          <h1
            className={`font-bold leading-none tracking-[0.3px] text-[40px] text-center sm:text-[50px] xl:text-[72px] md:text-right xl:text-left ${
              theme === "light" ? "text-main-dark" : "text-main-gray"
            }`}
          >
            {heroData.greeting}
          </h1>
          <h1
            className={`font-bold leading-none tracking-[0.3px] text-[40px] text-center sm:text-[50px] xl:text-[72px] md:text-left xl:text-left ${
              theme === "light" ? "text-main-dark" : "text-main-gray"
            }`}
          >
            {heroData.intro}
          </h1>
        </div>

        <p
          className={`text-lg tracking-[0.3px] text-center xl:text-left xl:mr-15 ${
            theme === "light" ? "text-dim-gray" : "text-pure-white"
          }`}
        >
          {heroData.ctaHTML}
        </p>

        <div className="flex flex-col md:flex-row item-center justify-between xl:justify-start gap-3">
          <button
            onClick={() => scrollToSection("footer")}
            className={`border px-8 py-3 rounded-md font-bold text-lg cursor-pointer transition-colors ${
              theme === "light"
                ? "text-soft-purple bg-brand-purple border-brand-purple hover:bg-deep-purple hover:text-white"
                : "text-pure-black bg-deep-gray border-brand-purple hover:bg-deep-purple hover:text-white"
            }`}
          >
            {lang === "en" ? "Hire me" : "İşe al"}
          </button>

          {heroData.socials.map((e, index) => (
            <a
              key={index}
              href="https://www.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center md:justify-start border pr-5 pl-2.5 py-3 rounded-md font-semibold text-lg cursor-pointer gap-2.5 transition-colors ${
                theme === "light"
                  ? "text-brand-purple border-brand-purple hover:bg-soft-purple"
                  : "text-deep-gray bg-[#383838] border-deep-gray hover:bg-soft-purple hover:text-[#1F2937]"
              }`}
            >
              <img
                className="w-6.5 h-6.5"
                src={theme === "light" ? e.img : e.imgDark}
                alt={e.name}
              />
              <span>{e.name}</span>
            </a>
          ))}
        </div>
      </div>
      <img
        className="order-1 xl:order-2 w-[80%] rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
        src={heroData.profileImage}
        alt="profile_img"
      />
    </div>
  );
}

export default Hero;
