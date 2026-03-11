import React, { useContext } from 'react'
import { SiteContext } from '../contexts/SiteContext';

function Projects() {

    const { siteData, lang, theme } = useContext(SiteContext);
      const projectsData = siteData[lang].projectsSection;
  return (
    <div className='mb-35 max-w-360 mx-auto pl-31.25 pr-43.75'>
        <div className="w-[99.47%] ml-auto h-0.5 mt-10.5 bg-light-purple"></div>
        <h2 className={`text-5xl font-semibold text-center lg:text-left mt-10 mb-8.75 ${
          theme === "light" ? "text-main-dark " : "text-main-gray"
        }`}>{projectsData.title}</h2>
        <div className='flex flex-col xl:flex-row w-[80%] xl:w-full mx-auto justify-center xl:justify-between gap-10 lg:gap-30'>
        {/* Map */}
        {projectsData.projects.map((e,index)=> (
            <div key={`project-row-${index}`} className={`flex flex-col gap-y-4.5`} >
                <img src={e.image} alt={e.name} />
                <h3 className={`text-3xl font-medium ${
            theme === "light" ? "text-indigoo " : "text-indigoo-subtle"
          }`}>{e.name}</h3>
                <p className={`text-lg xl:text-sm  ${
                theme === "light" ? "text-dim-gray " : "text-pure-white"
              }`}>{e.description}</p>
                <div className='flex gap-1.5'> {/* tags */}
                    {e.tags.map((tag,index)=>(
                        <span key={`project-tags-${index}`} className={` text-lg xl:text-sm border rounded-md px-4.5 py-1.75 leading-none  ${ theme === "light" ?
                             " text-deep-purple" :
                              "bg-button-gray text-axios-purple"
          }`}>{tag}</span>
                    ))}
                </div>
                <div className='flex justify-between '>  {/* links */}
                    {e.links.map((link,index)=>(
                        <span key={`project-links-${index}`} className={`text-xl xl:text-base underline ${theme==="light" ?
                            "text-deep-purple":
                            "text-deep-gray"
                        }`}>{link}</span>
                    ))}

                </div>
            </div>
        ))}
        {/* /Map */}
        </div>
    </div>
  )
}

export default Projects
