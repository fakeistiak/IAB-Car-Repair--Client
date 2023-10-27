import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="w-full shadow-black max-w-xs overflow-hidden bg-base-100  rounded-lg shadow-lg">
      <img className="object-cover w-full h-56" src={img} alt="avatar" />
      <div className="py-5 text-center">
        <p className="block text-2xl font-bold text-black">{title}</p>
        <div className="flex justify-between px-3 pt-4">
          <span className="text-lg font-semibold text-black">
            Price: ${price}
          </span>
          <Link>
            <BsArrowRightSquareFill className="text-4xl bg-white text-black"></BsArrowRightSquareFill>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
