import Image from "next/image";

export default function Navbar() {
    return (
        <div className="splash bg-slate-800/50 flex flex-row justify-between p-4">
            {/* Fire emoji */}

            <div className="flex-shrink-0 self-start">
                <Image
                    src="/fire.gif"
                    alt="Burning my brain"
                    height="80"
                    width="80"
                />
            </div>

            {/* Navigation items */
            }
            <div id="nav-bar" className="flex flex-wrap items-center text-orange-600 mx-4">
                <div id="home" className="mr-2">
                    Home
                </div>
                <div id="contact" className="mr-2">
                    Contact
                </div>
                <div id="resume" className="mr-2">
                    Resume
                </div>
                <div id="projects" className="mr-2">
                    Projects
                </div>
            </div>
        </div>
    );
}