import Image from "next/image";
import "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="splash bg-slate-800/50  flex flex-row flex-wrap">
      {/* here i will place a fire emoji */}
      <div>
        <div className="avatar ml-5 mt-2">
          <div className="w-24 rounded">
            <Image
              src="/fire.gif"
              alt="Burning my brain"
              height="50"
              width="50"
            ></Image>
          </div>
        </div>
      </div>
      <div id="nav-bar" className="pt-5 ml-auto mr-20 text-orange-600">
        <div id="home" className="nav-bar">
          About{" "}
        </div>
        <div id="contact" className="nav-bar">
          Contact{" "}
        </div>
        <div id="resume" className="nav-bar">
          Resume{" "}
        </div>
        <div className="nav-bar">Projects </div>
      </div>
      {/* <hr className="hr_underline" /> */}
    </div>
  );
}