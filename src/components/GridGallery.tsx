import React from "react";

const GridGallery = () => {
  return (
    <div className="grid grid-cols-2 w-full max-w-[54rem]  mx-auto mt-28 mb-16">
      {/* First Text Section */}
      <div className="bg-gray-300 p-8 flex flex-col justify-center min-h-[300px]">
        <h2 className="font-montaga text-3xl mb-3 leading-tight">
          Transforming Spaces,
          <br />
          Defining
          <br />
          Experiences
        </h2>
        <a
          href="#"
          className="text-black hover:text-gray-700 transition-colors mt-2 text-base"
        >
          View Project
        </a>
      </div>

      {/* First Image */}
      <div className="relative min-h-[300px]">
        <img
          src="/7.png"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Image */}
      <div className="relative min-h-[300px]">
        <img
          src="/8.png"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Text Section */}
      <div className="bg-[#FF9F7D] p-8 flex flex-col justify-center min-h-[300px]">
        <h2 className="font-montaga text-3xl mb-3 leading-tight">
          Innovation in
          <br />
          Design,
          <br />
          Timeless in
          <br />
          Appeal
        </h2>
        <a
          href="#"
          className="text-black hover:text-gray-700 transition-colors mt-2 text-base"
        >
          Keep in Touch
        </a>
      </div>
    </div>
  );
};

export default GridGallery;