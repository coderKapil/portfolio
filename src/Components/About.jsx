import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello everyone my name is Kapil Rana . I am a Frontend developer my
          skillsets are Html ,CSS , JavaScript , React JS,Tailwind CSS. so that
          if i get the opportunity to work on the frontend technologies. I could
          deliver better from my end to the organisation.
        </p>
        <br />

        <p className=" text-xl">
          When i am not working i would love to spend my time with my friends
          and family members. feeding streets dogs and upskilling myself in my
          mean time
        </p>
      </div>
    </div>
  );
};

export default About;
