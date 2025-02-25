import React from "react";
import GridGallery from "./GridGallery";

const images = [
  "/4.png",
  "/5.png",
  "/6.png",
  "/4.png",
  "/5.png",
  "/6.png"
];

const PhotoGallery = () => {
  return (
    <>
      <div className="relative max-w-[75rem] overflow-visible p-5 mx-auto left-28 mt-28">
        {/* Vertical Text */}
        <div className="absolute -left-28 top-1/2 -translate-y-1/2 transform -rotate-90 whitespace-nowrap">
          <span className="font-montaga text-[5.7rem] -top-40 left-7 font-semibold tracking-[0.16em] text-black relative before:content-[''] before:absolute  before:-left-4 before:top-18 before:h-[0.3rem]  before:w-[30rem]  before:bg-black pt-2">
            PROJECT
          </span>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          className="flex space-x-6 space-y-9 overflow-y-hidden overflow-x-auto snap-x snap-mandatory mb-4
          [&::-webkit-scrollbar]:h-1
          [&::-webkit-scrollbar]:w-0
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-[#7A2C0A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#DF835B]"
        >
          {images.map((src, index) => (
            <div key={index} className="snap-start shrink-0 w-[400px] first:ml-24">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
      <GridGallery />
    </>
  );
};

export default PhotoGallery;
