import Image from "next/image";

export default function SkillCard(props) {
  const { language } = props;
  return (
    <div >
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            layout="intrinsic"
            height={"100%"}
            width={"100%"}
            src={language.img}
            alt="Album"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{`${language.mark}/10`}</h2>
        </div>
      </div>
    </div>
  );
}
