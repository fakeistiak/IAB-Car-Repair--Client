const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/SrHM112/mechanic-servicing-car-engine-Copy.jpg"
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Expert Car Mechanics Revitalize Rides
            </h2>
            <p>
              Your Trusted Car Mechanics: Expert Repairs, Affordable Service,
              Keeping You on the Road with Confidence.
            </p>
            <div>
              <button className="btn text-white bg-black hover:bg-gray-600 mr-4">
                Discover More
              </button>
              <button className="btn text-white bg-black hover:bg-gray-600">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle hover:bg-black hover:text-white mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-black hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/kGzpPTd/auto-mechanic-working-garage-repair-service.jpg"
          className="w-full object-cover"
        />
        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Auto Pros Restore Vehicles Anew
            </h2>
            <p>
              Trusted Car Technicians: Exceptional Service, Competitive Prices,
              Ensuring Your Roadworthiness.
            </p>
            <div>
              <button className="btn text-white bg-black hover:bg-gray-600 mr-4">
                Discover More
              </button>
              <button className="btn text-white bg-black hover:bg-gray-600">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle hover:bg-black hover:text-white mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-black hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/Yp8zLgk/benchman-fixing-engine-car-Copy.jpg"
          className="w-full object-cover"
        />
        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Car Mechanics: Reviving Rides Daily
            </h2>
            <p>
              Expert Automotive Care: Affordable Maintenance, Keeping Your Drive
              Smooth and Worry-Free.
            </p>
            <div>
              <button className="btn text-white bg-black hover:bg-gray-600 mr-4">
                Discover More
              </button>
              <button className="btn text-white bg-black hover:bg-gray-600">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle hover:bg-black hover:text-white mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-black hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/mq1QkJB/male-female-mechanics-working-shop-car.jpg"
          className="w-full object-cover"
        />
        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Skilled Mechanics Refresh Your Car
            </h2>
            <p>
              Reliable Auto Specialists: Quality Repairs, Budget-Friendly
              Solutions, Your Road to Peace of Mind.
            </p>
            <div>
              <button className="btn text-white bg-black hover:bg-gray-600 mr-4">
                Discover More
              </button>
              <button className="btn text-white bg-black hover:bg-gray-600">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle hover:bg-black hover:text-white mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-black hover:text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
