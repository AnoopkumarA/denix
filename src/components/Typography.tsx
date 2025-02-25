const UniqueProcess = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-11.5 flex items-center justify-between space-x-10 mt-24">
      

      {/* Left - Large Text */}
      <div className="text-[3.8rem] font-serif leading-tight space-y-1.5">
        <p>
          Be <span className="text-[#7A2C0A] underline">Unique</span>
        </p>
        <p>In The</p>
        <p>
          <span className="text-[#7A2C0A] underline">Process</span>.
        </p>
      </div>

      {/* Right - Description */}
      <div className="max-w-[35rem] font-serif text-sm leading-relaxed">
        <p>
          At <strong>ECHOES</strong>, we create spaces that resonate with purpose and authenticity.
          Blending creativity with functionality, we craft interiors that inspire, connect, and
          enhance everyday living. Every detail is intentional, every design tells a story. Your
          space should feel like an extension of you.
        </p>
        <a href="#" className="mt-3 inline-block text-gray-800 underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default UniqueProcess;
