import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Our Executive Team
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent text-black group hover:bg-black-600 hover:bg-black hover:text-white">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/Bj5wjpM/mechanic-servicing-car-engine-Copy.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold capitalize  group-hover:text-white">
              arthur melo
            </h1>
            <p className="mt-2 capitalize  group-hover:text-white">
              design director
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex text-xl justify-evenly gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:text-white hover:bg-black">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/N1PMMRs/smiling-mechanic-with-arms-crossed-spanner-Copy.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              Amelia. Anderson
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
              Lead Developer
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4 ">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-black-600 hover:text-white hover:bg-black">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/6bHW46z/car-mechanic-changing-wheels-car.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              Olivia Wathan
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
              Lead designer
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
               <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-black-600 hover:text-white hover:bg-black">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/nnzFv5w/mechanic-holding-digital-tablet.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              John Doe
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
              Full stack developer
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
              <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
