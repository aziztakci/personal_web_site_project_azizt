import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Footer() {
  const { siteData, lang, theme } = useContext(SiteContext);
  const footerData = siteData[lang].footerSection;

  return (
    <section className={theme==="light"?
      "bg-footer-gray":
      "bg-footer-dark"
      }>
      <div className={`flex flex-col pt-21.25 max-w-360 mx-auto pl-31.25 pr-43.75 `}>
      <h2
        className={`text-[42px] font-semibold text-center mx-auto xl:text-left xl:mx-0 xl:w-117.5 ${
          theme === "light" ? "text-main-dark" : "text-main-gray"
        }`}
      >
        {footerData.title}
      </h2>

      <div className="flex flex-col gap-y-5 xl:flex-row justify-between items-center w-full mt-15.25 mb-32.5">
        <a
          href={`mailto:${footerData.email}`}
          className={`flex items-center gap-2.5 text-xl font-medium ${
            theme === "light" ? "text-brand-red" : "text-main-gray"
          }`}
        >
          <img src={footerData.image} alt="point" />
          {footerData.email}
        </a>

        <div className="flex gap-4">
          {footerData.links.map((link, index) => (
            <a
              href={link.url}
              key={`footer-links-${index}`}
              className={`text-lg font-medium ${
                theme === "light" ? link.color : link.colorDark
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Footer;
