import React from "react";
import HighText from "./HighText";

const About = () => {
  return (
    <div className='font-noto'>
      <div className=' font-semibold px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
        About
      </div>
      <div className='bg-[#27272a]/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-[#7d7d85]  text-noto text-base  md:text-base tracking-wide  ease-linear duration-100'>
        <div className='pb-2'>
          Hey, I'm <HighText>Kartik 👋</HighText>. I am a passionate <HighText>Developer 👨🏻‍💻</HighText> who loves to build awesome <HighText>Web Apps💻</HighText>.With <HighText>a year of experience</HighText> working with a diverse range of technologies, I have honed 🎓 my skills in both <HighText> front-end and back-end development</HighText>, enabling me to build end-to-end solutions.

        </div>
        <div>
          I'm a final year <HighText>Computer Science & Engineering</HighText> Undergraduate Student looking for <HighText>Internship and Full Time Opportunities</HighText>.
        </div>
      </div>
    </div>
  );
};

export default About;
