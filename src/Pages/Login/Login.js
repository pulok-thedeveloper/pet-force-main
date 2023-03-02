import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./Login.css";

const Login = () => {
  const {signInwithGoogle, login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    login(email, password)
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
        navigate(from, { replace: true });
    })
    .catch(error=> console.error(error))
}


  return (
    <div className="bg-gray-100 min-h-screen grid place-items-center">
      <div className="login-container w-9/12 md:4/5 h-min-4/5 grid md:grid-cols-2 rounded-lg">
        <div className="py-10 px-16">
          <h2 className="login-title text-2xl font-bold mb-3">Login</h2>
          <p className="text-gray-600 text-sm">Welcome again</p>

          <form onSubmit={handleSubmit} className="mt-5">
            <input
              className="input-focus rounded-full text-sm py-3 px-5 w-full mt-5 outline-none"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input-focus  rounded-full text-sm py-3 px-5 w-full mt-5 outline-none"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="rounded-full py-2 px-5 w-full mt-5 primary-btn cursor-pointer text-white font-semibold"
              type="submit"
              value="Login"
            />
          </form>
          <div className="devider grid justify-center mt-5">
            <p className="text-gray-500">----------- OR ------------</p>
          </div>
          <div>
            <button onClick={handleGoogleSignIn} className="google-btn rounded-full py-2 px-5 w-full mt-5 cursor-pointer text-white font-semibold flex justify-center items-center gap-3">
              <FcGoogle className="bg-white rounded text-xl" /> Sign in with
              Google
            </button>
          </div>
          <p className="mt-5 text-center">
            Need an account?{" "}
            <Link className="primary-color" to="/signup">
              SIGNUP
            </Link>
          </p>
        </div>
        <div className="signup-image rounded-lg hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
