import Image from "next/image";

export default function AboutMeShort() {
  return (
    <>
      <div className="ml-10">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image
              alt="My Face Sucks"
              src="/asshole.png"
              width="64"
              height="64"
            />
          </div>
        </div>
      </div>

      <div>
        <span className="font-sans font-bold text-2xl text-orange-600">
          Dip Chowdhury
        </span>
      </div>
      <div>
        <p className="font-sans decoration-wavy text-orange-500">
          Software Engineer
        </p>
      </div>

      {/* my detail section */}
      <div className="mx-4 px-10 text-center mt-5 text-sm text-orange-500">
        <p>
          Working from 2018, have been through lot of techs, but still now
          don&apos;t know what&apos;s my favorite language
        </p>
      </div>
    </>
  );
}
