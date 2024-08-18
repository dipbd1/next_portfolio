import Image from "next/image";
import {Skills} from "../../data/skills";
import {Glow, GlowCapture} from "@codaworks/react-glow";

export default function SkillCards() {
    return (
        <GlowCapture>

            <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 my-4 ">


                {Skills.map((skill, index) => (
                    // <SkillCard key={language.id} language={language} />
                    <div key={index} className="hover:shadow-glowAllSide hover:shadow-fuchsia-300">
                        <Glow>
                            <div className="card card-side bg-base-100 rounded-tl-lg rounded-bl-lg">
                                <figure>
                                    <Image
                                        layout="intrinsic"
                                        height={"100%"}
                                        width={"100%"}
                                        src={skill.img}
                                        alt="Album"
                                    ></Image>
                                </figure>
                                <div className="card-body glow:bg-black rounded-tr-lg rounded-br-lg">
                                    <h2 className="card-title glow:text-cyan-500">{`${skill.mark}/10`}</h2>
                                </div>
                            </div>
                        </Glow>
                    </div>
                ))}
            </div>
        </GlowCapture>

    );
}
