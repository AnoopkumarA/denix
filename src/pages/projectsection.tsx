import React from "react";

const ProjectSection = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/10.png"
            alt="Swing Area"
            className="w-full h-auto object-cover border border-white shadow-lg"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/11.png"
            alt="Ceiling View"
            className="w-full h-auto object-cover border border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
