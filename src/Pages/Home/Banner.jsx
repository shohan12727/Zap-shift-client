import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img className="w-full h-auto" src={banner1} />
        <button className="bg-secondary absolute top-112 btn rounded-3xl left-20 text-2xl hover:bg-primary  text-white">
          Track Your Parcel
        </button>
        <button className="btn btn-outline btn-secondary text-2xl text-black hover:text-white absolute top-112 left-78">
          Be A Rider
        </button>
      </div>
      <div>
        <img className="w-full h-auto" src={banner2} />
        <button className="bg-secondary absolute top-112 btn rounded-3xl left-20 text-2xl hover:bg-primary  text-white">
          Track Your Parcel
        </button>
        <button className="btn btn-outline btn-secondary text-2xl text-black hover:text-white absolute top-112 left-78">
          Be A Rider
        </button>
      </div>
      <div>
        <img className="w-full h-auto" src={banner3} />
        <button className="bg-secondary absolute top-112 btn rounded-3xl left-20 text-2xl hover:bg-primary  text-white">
          Track Your Parcel
        </button>
        <button className="btn btn-outline btn-secondary text-2xl text-black hover:text-white absolute top-112 left-78">
          Be A Rider
        </button>
      </div>
    </Carousel>
  );
};

export default Banner;
