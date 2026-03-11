import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Skills() {
  const { siteData, lang, theme } = useContext(SiteContext);
  const skillsData = siteData[lang].skillsSection;

  return (
    <div>
      <h2
        className={`text-5xl font-semibold text-center lg:text-left mt-31.25 mb-8.75 ${
          theme === "light" ? "text-main-dark " : "text-main-gray"
        }`}
      >
        {skillsData.title}
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between gap-x-30 gap-y-10">
        {skillsData.skills.map((e, index) => (
          <div key={index} className="flex flex-col w-[80%] lg:w-[40%] xl:w-[23%]">
            <h3
              className={`text-3xl font-medium ${
                theme === "light" ? "text-indigoo " : "text-indigoo-subtle"
              }`}
            >
              {e.name}
            </h3>
            <p
              className={`text-xs mt-7 ${
                theme === "light" ? "text-dim-gray " : "text-pure-white"
              }`}
            >
              {e.description}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Skills;
