import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Login = () => {
  const [setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        <Navigate to="/login"></Navigate>;

        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        swal("Login Successful", "EXPLORE THE PAGE", "success");
        console.error(error);
        return navigate(location?.state ? location.state : "/");
        // console.error(error)
      });
  };
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, form);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal("Login Successful", "EXPLORE THE PAGE", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal(error?.message);
        console.error(error);

        return;
      });
  };

  return (
    <div className="bg-white dark:bg-gray-600">
      <div className="flex justify-center h-[600px]">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <img
            className="h-[600px]"
            src="https://i.ibb.co/rtjMyzY/side-view-male-hacker-with-gloves-laptop-1.jpg"
          />
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-bold text-white">
                Sign In Please
              </h1>
              <p className="mt-3 text-white">Sign In to access your account</p>
            </div>
            <div className="mt-8">
              <form onSubmit={handleLogin}>
                <div>
                  <p className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </p>
                    <a
                      href="#"
                      className="text-sm text-white focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="btn w-full bg-black text-white hover:bg-gray-600"
                    type="submit"
                    value="Login"
                  >
                    Sign in
                  </button>
                  <div className="flex">
                    <button onClick={handleGoogleSignIn} className="btn btn-ghost w-full mt-4 text-white border-white hover:bg-gray-200 hover:text-black">
                      Sign In with Google{" "}
                      <FcGoogle className="text-2xl"></FcGoogle>{" "}
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Dont have an account yet?
                <Link
                  to="/register"
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
