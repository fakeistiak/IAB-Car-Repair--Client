import { FcCancel } from "react-icons/fc";
import swal from "sweetalert";

const BookingRow = ({ booking,handleDelete }) => {
    const { date, service, price, img, _id } = booking;
    

   
  return (
    <tr>
      <th className="text-3xl">
        <button onClick={()=>handleDelete(_id)}>
          <FcCancel></FcCancel>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} />
          </div>
        </div>
      </td>
      <td className="text-xl font-semibold">{service}</td>
      <td className="text-lg">{date}</td>
      <td className="text-lg">${price}</td>
      <th>
        <button className="btn bg-black hover:bg-gray-600 text-white">
          Details
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
