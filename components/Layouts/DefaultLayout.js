import Image from "next/image";
import AboutMeShort from "../AboutMeShort/ABoutMeShort";
import MyScene from "../3DModel/MyScene";
import Navbar from "../Navbar/Navbar";
import SkillCard from "../SkillCard/SkillCard";
import { Languages } from "../../data/languages";

export default function DefaultLayout() {
  return (
    <>
      {/* shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] */}
      <div className="container md:w-3/4 rounded-md mx-auto shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] mt-8   shadow-cyan-500/50 ">
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
            <div>
              <div className="flex justify-start">
                {/* here will be my 3d model */}
                <div className="flex-none h-80 w-40 mx-auto">
                  <MyScene />
                </div>

                {/* here i will start putting my skill sets */}
                <div className="grid  grid-cols-2 gap-8 -center mx-auto">
                  {Languages.map((language) => (
                    <SkillCard key={language.id} language={language} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="mt-auto">{/* ... */}</footer>
    </>
  );
}
