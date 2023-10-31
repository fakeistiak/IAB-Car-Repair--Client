import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2 className="text-center font bold font-serif  text-5xl pb-8">
        {title}
      </h2>
      <section className="max-w-6xl p-20 mx-auto bg-white rounded-md shadow-md dark:bg-[#F3F3F3]">
        <h2 className="text-lg font-semibold text-black capitalize">
          Account settings
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
            <div>
              <input
                placeholder="First Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                placeholder="Last Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                placeholder="Your Phone"
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
             
              <input
                placeholder="Your Email"
                type="email"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
            <div>
             
              <input
                placeholder="Your Message"
                className="block w-full py-4 px-4 mt-2 border border-black rounded-md  dark:border-gray-600 focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="btn w-full bg-black hover:bg-gray-600 text-white">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
