import Bank from "../3DModel/Bank";
import ITSF from "../3DModel/ITSF";
import Police from "../3DModel/Police";



export default function IndustriesWorkedWith() {

    return <div id="IndustriesWorkedWith" className="flex flex-col justify-center w-full mt-4">
        <div className="text-center">
            <span className="text-6xl text-emerald-300 font-extrabold ">Industries worked with</span>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
            <div>
                <Bank/>
            </div>
            <div>
                <ITSF/>
            </div>
            <div>
                <Police/>
            </div>
        </div>
    </div>
}