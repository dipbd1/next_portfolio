import Image from "next/image";
import AboutMeShort from "../AboutMeShort/ABoutMeShort";
import MyScene from "../3DModel/MyScene";
import Navbar from "../Navbar/Navbar";
import SkillCards from "../SkillCards/SkillCards";
import './defaultLayout.module.css'
import JobExperienceCards from "../JobExperienceCards/JobExperienceCards";

import { Languages } from "../../data/skills";
import { Experiences } from "../../data/experiences";
import EducationCards from "../EducationCards/EducationCards";

export default function DefaultLayout() {
  return (
    <>
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

          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            {/* <!-- content area --> */}
            <div className="flex flex-wrap justify-start">
              {/* here will be my 3d model */}
              <div className="flex flex-col lg:flex-row">
                <div className="flex-grow w-2/3 h-80  mx-auto">
                  <MyScene />
                </div>

                {/* here I will start putting my skill sets */}
                <SkillCards />
              </div>

              {/* a divider made with tailwind css */}
              <div className="w-full my-10 border-t border-gray-300"></div>
              <JobExperienceCards />
              <div className="w-full my-10 border-t border-gray-300"></div>
              <EducationCards />
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
