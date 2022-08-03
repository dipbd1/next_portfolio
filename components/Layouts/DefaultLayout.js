import Image from "next/image";
import AboutMeShort from "../AboutMeShort/ABoutMeShort";
import MyScene from "../3DModel/MyScene";
import Navbar from "../Navbar/Navbar";

export default function DefaultLayout() {
  return (
    <>
      {/* shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] */}
      <div className="container rounded-lg mx-auto shadow-[0px_0px_250px_30px_rgba(0,0,0,0.3)] mt-8   shadow-cyan-500/50 ">
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
            <div className="ml-10 mt-20">
              <div>
              {/* here will be my 3d model */}
                <div className="mt-10 h-96 pl-72">
                  <MyScene />
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
