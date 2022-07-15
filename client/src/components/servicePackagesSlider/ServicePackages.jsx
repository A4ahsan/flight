import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ServicePackages.css";
const ServicePackages = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="service-package-slider slide-1">
        <h2 className="service-main-title">America</h2>
        <a className="service-btn btn-1">Flights From $120</a>
      </div>
      <div className="service-package-slider slide-2">
        <h2 className="service-main-title">Australia</h2>
        <a className="service-btn btn-1">Flights From $130</a>
      </div>
      <div className="service-package-slider slide-3">
        <h2 className="service-main-title">New Zealand</h2>
        <a className="service-btn btn-1">Flights From $140</a>
      </div>
      <div className="service-package-slider slide-4">
        <h2 className="service-main-title">Africa</h2>
        <a className="service-btn btn-1">Flights From $150</a>
      </div>
      <div className="service-package-slider slide-5">
        <h2 className="service-main-title">South America</h2>
        <a className="service-btn btn-1">Flights From $160</a>
      </div>
      <div className="service-package-slider slide-6">
        <h2 className="service-main-title">Middle East</h2>
        <a className="service-btn btn-1">Flights From $170</a>
      </div>
    </Carousel>
  );
};
export default ServicePackages;
