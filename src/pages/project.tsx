import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-36 p-10 font-['Montaga']">
      {/* Left: Project Title & Image */}
      <div className="flex flex-col items-start mt-18 relative ml-16">
        <h1 className="text-[4rem] font-medium">PROJECT</h1>
        <div className="shadow-lg mt-6">
          <Link to="/project-details">
            <img
              src="/9.png"
              alt="Project"
              className="w-[300px] h-auto object-cover border border-none cursor-pointer"
            />
          </Link>
          <div className="flex justify-between text-sm p-2 border-t">
            <span>Pala</span>
            <span className="text-gray-500">Residential</span>
          </div>
        </div>
      </div>

      {/* Right: Client Review */}
      <div className="flex flex-col mt-28">
        <h2 className="text-[2.5rem] mb-4">Client review</h2>
        <div className="border border-neutral-100 rounded-lg shadow-md p-4 w-[500px]">
          <p className="text-gray-700 font-sans text-base font-normal">
            ECHOES transformed our space with stunning design and seamless
            functionality, creating an environment that feels both personal and
            timeless! ECHOES transformed our space with stunning design and...
          </p>
          <div className="flex justify-between mt-3 text-sm font-bold font-sans">
            <span>Name</span>
            <a href="#" className="text-blue-600">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
