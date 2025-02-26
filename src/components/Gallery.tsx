const Gallery = () => {
    return (
      <div className="max-w-[69rem] h-[52rem] mx-auto p-6">
        <div className="grid grid-cols-2 gap-[0.4rem] h-full">
          {/* Left Image - Large */}
          <div className="col-span-1 h-[38rem]">
            <img
              src="/1.png"
              alt="Modern Balcony"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
  
          {/* Right Column - Two Smaller Images */}
          <div className="col-span-1 grid grid-rows-2 gap-[0.4rem] h-[38rem]">
            <img
              src="/2.png"
              alt="Cozy Balcony Setup"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="/3.png"
              alt="Greenery Balcony"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;
