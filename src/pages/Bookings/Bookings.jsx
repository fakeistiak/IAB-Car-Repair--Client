import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import swal from "sweetalert";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url,{withCredentials:true})
      .then(res => {
        setBookings(res.data);
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
    
  }, [url]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete?",
      text: "This action cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((proceed) => {
      if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal({
                title: "Deleted Successful",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  const handleApprove = (id) => {
      fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'PATCH',
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify({status:'confirm'})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          if (data.modifiedCount > 0) {
              const remaining = bookings.filter(booking => booking._id !== id);
              const updated = bookings.find(booking => booking._id === id);
              updated.status = 'confirm'
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl text-center py-4 font-serif">Your Bookings</h2>
      <div className="overflow-x-auto cursor-all-scroll border-y-2">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-black">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleApprove={handleApprove}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
