import AboutMeShort from "../AboutMeShort/ABoutMeShort";
import Navbar from "../Navbar/Navbar";
import SkillCards from "../SkillCards/SkillCards";
import './defaultLayout.module.css'
import JobExperienceCards from "../JobExperienceCards/JobExperienceCards";
import EducationCards from "../EducationCards/EducationCards";
import BackgroundParticles from "../Backgrounds/SpaceParticles";

export default function DefaultLayout() {
  return (
    <>
      <BackgroundParticles />
      <div className="container mx-auto my-8 p-4 max-w-4xl">
        {/* <!-- navigation --> */}
        <Navbar />
        <div className='mx-4'>

          <AboutMeShort />

          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            {/* <!-- content area --> */}
            <div className="flex flex-wrap justify-start">

              {/*  /!* here I will start putting my skill sets *!/*/}
                <SkillCards />
              {/*</div>*/}

              {/* a divider made with tailwind css */}
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
