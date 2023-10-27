const About = () => {
  return (
    <div className="hero min-h-screen lg:mb-28 sm:mb-40">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/7X0ytH6/sten-rademaker-UZUzv-JEv-Kn-I-unsplash-1.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl shadow-black border-8"
          />
          <img
            src="https://i.ibb.co/PDPq7b7/christian-buehner-BDd9kmf8k-Qk-unsplash-1.jpg"
            className="w-3/4 shadow-black rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-xl lg:text-2xl font-bold">About US</h1>
          <h1 className="text-4xl lg:text-5xl font-bold lg:w-full sm:w-1/2">
            We are qualified & of experience in this field
          </h1>
          <p className="py-4 lg:py-6">
            Expertly restoring and maintaining vehicles. The majority have
            suffered alteration in some form, by injected humour, or random
            words which don not look even slightly believable. Seeking solutions
            for all your automotive needs. Delivering superior service and
            repairs for a reliable ride.
          </p>
          <p className="py-4 lg:py-6">
            The majority have suffered alteration in some form, by injected
            humour, or random words which don not look even slightly believable.
            Expertly restoring and maintaining vehicles. The majority have
            suffered alteration in some form, by injected humour, or random
          </p>
          <button className="btn bg-black text-white hover:bg-gray-600">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
