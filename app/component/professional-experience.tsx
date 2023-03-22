import React from "react";

const ProfessionalExperience = ({
  data,
}: {
  data: {
    title: string;
    experiences: {
      role: string;
      description: string;
      current: boolean;
    }[];
  };
}) => {
  const { title, experiences } = data;
  return (
    <section>
      <h2 className="mb-6 font-semibold"> {title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ role, description, current }) => (
          <div key={role} className="flex flex-col rounded-lg">
            <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md">
              <h3>{role}</h3>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
