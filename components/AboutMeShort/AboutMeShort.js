import DeathStar from "../3DModel/DeathStar";
import GlowingText from "../Texts/GlowingText";

export default function AboutMeShort() {
    return (
        <div className="">
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between sm:justify-center mx-4"
            >
                <div className="self-center w-full my-4 lg:my-20">
                    <DeathStar showPopOverOrNot={false}/>
                </div>
                <div className='self-center w-full mb-8 lg:mb-0'>
                    <div className="flex flex-col">
                        <div className="mb-2 self-center">
                            <GlowingText text="Dip Chowdhury" size="text-6xl"/>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-orange-500">
                                Making dreams come true by staying awake.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
