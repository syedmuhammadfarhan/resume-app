import React, { useId } from "react";
import Skills from "./skills";

const AboutMe = ({
  data,
  skills,
}: {
  data: { title: string; body: string[] };
  skills: {
    soft: {
      icon: string;
      text: string;
    }[];
    hard: {
      icon: string;
      text: string;
    }[];
  };
}) => {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-4"> {title}</h2>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`} className="mb-6">
          {el}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default AboutMe;
