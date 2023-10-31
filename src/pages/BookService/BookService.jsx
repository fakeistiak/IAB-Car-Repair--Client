import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
      console.log(booking,user);
      fetch("http://localhost:5000/bookings", {
          method: "post",
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify(booking)
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                swal("Booking Successful", "Book More", "success");
            }
        });
  };
  return (
    <div>
      <h2 className="text-center font bold font-serif  text-3xl pb-8">
        {title}
      </h2>
      <section className="max-w-6xl p-20 mx-auto bg-white rounded-md shadow-md dark:bg-[#F3F3F3]">
        <h2 className="text-lg font-semibold text-black capitalize">
          Account settings
        </h2>

        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
            <div>
              <input
                placeholder="Name"
                defaultValue={user?.displayName}
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                placeholder="Date"
                name="date"
                type="Date"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                defaultValue={"$" + price}
                id="phone"
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              value="Order Confirm"
              className="w-full btn bg-black hover:bg-gray-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookService;
