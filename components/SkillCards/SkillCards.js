import Image from "next/image";
import { Skills } from "../../data/skills";

export default function SkillCards() {
  return (
    <div className="flex flex-wrap grid-cols-2 gap-8 mx-auto items-center justify-center">
      {Skills.map((skill, index) => (
        // <SkillCard key={language.id} language={language} />
        <div key={index} >
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image
                layout="intrinsic"
                height={"100%"}
                width={"100%"}
                src={skill.img}
                alt="Album"
              ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{`${skill.mark}/10`}</h2>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}
