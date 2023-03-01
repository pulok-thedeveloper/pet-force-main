import React, { useContext } from "react";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  // const {createUser} = useContext(AuthContext)
  const { createUser, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      form.reset();
      navigate(from, {replace: true});
      console.log(user);
    })
    .catch(err => console.log(err.message))
  };

  const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true});
        })
        .catch(error=> console.error(error))
    }

  return (
    <div className="bg-gray-100 min-h-screen grid place-items-center">
      <div className="signup-container w-2/3 h-min-4/5 grid grid-cols-2 rounded-lg">
        <div className="py-10 px-16">
          <h2 className="signup-title text-2xl font-bold mb-3">Signup</h2>
          <p className="text-gray-600 text-sm">Welcome to our community</p>

          <form onSubmit={handleSubmit} className="mt-5">
            <input
              className="rounded-full text-sm py-3 px-5 w-full mt-5 outline-none input-focus "
              type="name"
              name="name"
              placeholder="Name"
            />
            <input
              className="rounded-full text-sm py-3 px-5 w-full mt-5 outline-none input-focus "
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="rounded-full text-sm py-3 px-5 w-full mt-5 outline-none input-focus "
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="rounded-full py-2 px-5 w-full mt-5 primary-btn cursor-pointer text-white font-semibold"
              type="submit"
              value="Signup"
            />
          </form>
          <div className="devider grid justify-center mt-5">
            <p className="text-gray-500">----------- OR ------------</p>
          </div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="google-btn rounded-full py-2 px-5 w-full mt-5 cursor-pointer text-white font-semibold flex justify-center items-center gap-3"
            >
              <FcGoogle className="bg-white rounded text-xl" /> Sign up with
              Google
            </button>
          </div>
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="primary-color">
              LOGIN
            </Link>
          </p>
        </div>
        <div className="signup-image rounded-lg"></div>
      </div>
    </div>
  );
};

export default Signup;
