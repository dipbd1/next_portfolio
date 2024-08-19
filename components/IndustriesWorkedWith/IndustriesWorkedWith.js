import Bank from "../3DModel/Bank";
import ITSF from "../3DModel/ITSF";
import Police from "../3DModel/Police";
import GlowingText2 from "../Texts/GlowingText2";




export default function IndustriesWorkedWith() {

    return <div id="IndustriesWorkedWith" className="flex flex-col justify-center w-full mt-4">
        <div className="self-center mb-4">
            {/*<span className="text-6xl text-emerald-300 font-extrabold ">*/}
            {/*    </span>*/}
            <GlowingText2
                text={"Industries Worked With"}
                size={"text-6xl"}
            />
        </div>
        <div className="flex flex-row flex-wrap justify-center">
            <div className="tooltip" data-tip="Money transfer system in bulk with systems including central bank">
                    <Bank/>
            </div>
            <div className="tooltip" data-tip="Internation Tabble Soccer Fedaration">
                <ITSF/>
            </div>
            <div className="tooltip" data-tip="CAD/RMS for State Police">
                <Police/>
            </div>
        </div>
    </div>
}