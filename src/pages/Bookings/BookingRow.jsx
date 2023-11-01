import { FcCancel } from "react-icons/fc";

const BookingRow = ({ booking, handleDelete,handleApprove }) => {
    const { date, service, price, img, _id,status } = booking;


  return (
    <tr>
      <th className="text-3xl">
        <button onClick={() => handleDelete(_id)}>
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
              {
                  status ==='confirm' ? <span className="text-primary font-bold">Approved</span> :
                  <button onClick={() => handleApprove(_id)} className="btn bg-black hover:bg-gray-600 text-white">Approve</button>
              }
      </th>
    </tr>
  );
};

export default BookingRow;
