import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navItems = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      {user?.email ? <>
        <li className="font-bold"><Link to="/bookings">My Bookings</Link></li>
      </>
       : <li className="font-bold"> <Link to="/login">Login</Link></li>
      }
      <li className="font-bold">
        <Link to="/services">Services</Link>
      </li>
      <li className="font-bold">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-28 h-20" src="https://i.ibb.co/7KtrSwk/logo.png" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-black hover:bg-gray-600 text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-black hover:bg-gray-600 text-white">
              Login
            </button>
          </Link>
        )}
        <a className="btn bg-black text-white hover:bg-gray-600">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
