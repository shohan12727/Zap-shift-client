import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "./SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    // console.log(data);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imagebb_api_key
        }`;

        axios.post(imageApiUrl, formData).then((res) => {
          const photoURL = res.data.data.url;

          // user in the database
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });

          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("after user update done");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleRegistration = (data) => {
  //   console.log(data);

  //   const profileImage = data.photo[0];

  //   // Step 1: Register user using Firebase
  //   registerUser(data.email, data.password)
  //     .then((result) => {
  //       console.log("User created:", result.user);

  //       // Step 2: Upload image to imgbb
  //       const formData = new FormData();
  //       formData.append("image", profileImage);

  //       const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
  //         import.meta.env.VITE_imagebb_api_key
  //       }`;

  //       return axios.post(imageApiUrl, formData);
  //     })
  //     .then((res) => {
  //       console.log("Image uploaded:", res.data);

  //       // Step 3: After image upload, update user profile
  //       const userProfile = {
  //         displayName: data.name,
  //         photoURL: res.data.data.url, // Image URL from imgbb
  //       };

  //       return updateUserProfile(userProfile);
  //     })
  //     .then(() => {
  //       console.log("User profile updated successfully!");
  //       navigate(location.state || '/');
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err);
  //     });
  // };

  return (
    <div className="flex justify-center items-center p-4 sm:p-6 ">
      <div className="card w-full max-w-md mx-auto shadow-sm bg-white rounded-lg">
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="p-6 sm:p-8"
        >
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
            Create Account
          </h2>

          {/* name Input Group */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className={`input input-bordered w-full p-3 border rounded-md ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Enter your name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required.</p>
            )}
          </div>
          {/* Image/ photo Input Group */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Photo
              </span>
            </label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className={`file-input  w-full  border  ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Enter your photo"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Photo is required.</p>
            )}
          </div>
          {/* Email Input Group */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`input input-bordered w-full p-3 border rounded-md ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Email is required.</p>
            )}
          </div>

          {/* Password Input Group */}
          <div className="form-control mt-4 mb-6">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer.",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                  message:
                    "Must contain: uppercase, lowercase, number, and special character.",
                },
              })}
              className={`input input-bordered w-full p-3 border rounded-md ${
                errors.password
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="********"
            />
            {/* Consolidated Error Message Display */}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Registration Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-3 px-4 rounded-md transition duration-150"
            >
              Register
            </button>
          </div>

          {/* Link to Login Page */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?
            <Link
              state={location.state}
              className="text-secondary underline hfont-semibold ml-1 transition duration-150"
              to="/login"
            >
              Log in here
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
