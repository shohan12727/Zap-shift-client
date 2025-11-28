import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location.state || '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center p-4 sm:p-6">      
      <div className="card w-full max-w-md mx-auto shadow-sm bg-white rounded-lg">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <form onSubmit={handleSubmit(handleLogin)} className="p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
            Login
          </h2>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full p-3 border rounded-md border-gray-300 focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}
          {/* Password */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full p-3 border rounded-md border-gray-300 focus:border-blue-500"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">password must be in 6 character</p>
            )}
          </div>

          <div className="text-right mb-4">
            <a className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-black font-bold py-3 px-4 rounded-md transition duration-150"
          >
            Login
          </button>
          <p>New to Zap SHift? <Link 
          state={location.state}
          className="underline text-secondary" to='/register'>Register</Link></p>
        </form>
        <SocialLogin/>
        
      </div>
    </div>
  );
};

export default Login;
