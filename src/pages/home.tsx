import Gallery from "../components/Gallery";
import UniqueProcess from "../components/Typography"

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Gallery />
        <UniqueProcess />
      </div>
    </div>
  );
};

export default Home;