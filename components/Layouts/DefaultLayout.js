import Image from "next/image";
import AboutMeShort from "../AboutMeShort/ABoutMeShort";
import MyScene from "../3DModel/MyScene";
import Navbar from "../Navbar/Navbar";
import SkillCard from "../SkillCard/SkillCard";
import './defaultLayout.module.css'
import JobExperienceCard from "../JobExperienceCard/JobExperienceCard";

import { Languages } from "../../data/languages";
import { Experiences } from "../../data/experiences";

export default function DefaultLayout() {
  return (
    <>
      {/* shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] */}
      <div className="container md:w-3/4 rounded-md mx-auto shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] mt-8 shadow-cyan-500/50 ">
        {/* <!-- navigation --> */}
        <Navbar />
        <div className="flex flex-row flex-wrap py-4 bg-slate-800/50">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full lg:border-r-2 md:border-r-2 border-r-amber-700 flex flex-col items-center">
              {/* <ul className="flex flex-col overflow-hidden">...</ul> */}
              {/* here starts the leftside */}
              {/* my avatar */}
              <AboutMeShort />
            </div>
          </aside>
          {/* <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <div>
              <div className="flex justify-start">

                <div className="flex-none h-80 w-40 mx-auto">
                  <MyScene />
                </div>

                <div className="grid  grid-cols-2 gap-8 -center mx-auto">
                  {Languages.map((language) => (
                    <SkillCard key={language.id} language={language} />
                  ))}
                </div>
              </div>
            </div>
          </main> */}
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            {/* <!-- content area --> */}
            <div className="flex flex-wrap justify-start">
              {/* here will be my 3d model */}
              <div className="flex-none h-80 w-40 mx-auto">
                <MyScene />
              </div>

              {/* here I will start putting my skill sets */}
              <div className="flex flex-wrap grid-cols-2 gap-8 mx-auto items-center justify-center">
                {Languages.map((language) => (
                  <SkillCard key={language.id} language={language} />
                ))}
              </div>
              {/* a divider made with tailwind css */}
              <div className="w-full my-4 border-t border-gray-300"></div>
              {/* there will be a job experience card, that will expand and zoom where i can see the details of the job (JSX) */}
              <div className="gap-2 lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid-cols-1 justify-center w-full mx-6">
                {Experiences.map((experience) => (
                  <div key={experience.id} className="py-3">
                    <JobExperienceCard
                      title={experience.title}
                      company={experience.company}
                      description={experience.description}
                      start_date={experience.start_date}
                      end_date={experience.end_date}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full my-4 border-t border-gray-300"></div>

              {/* there will be a card with my education */}
              {/* there will be a card with my projects */}
              {/* there will be a card with my hobbies */}
              {/* there will be a card with my contact details */}

            </div>
          </main>
        </div>
      </div>
      <footer className="mt-auto">{/* ... */}</footer>
    </>
  );
}
