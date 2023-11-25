import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    //image upload to imgBB and then get an url
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log("Logged User", loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          console.log("User Profile Updated");
          const userInfo = {
            name: data.name,
            email: data.email,
            image: res.data.data.display_url,
            role: data.role,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
      });
    }
  };


  return (
    <>
      <Helmet>
        <title>Signup | EMS</title>
      </Helmet>
      <div className=" my-4 flex flex-col justify-center items-center font-workSans">
        <div className="w-96 rounded-lg bg-gradient-to-tr from-[#095a90] to-[#6eb6e5] p-6">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-semibold text-white">
              Please Sign Up
            </h2>
          </div>
          {/* form */}
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4 w-full"
            >
              <input
                {...register("name", { required: true, maxLength: 20 })}
                className="p-2 rounded border border-[#00C957]"
                type="text"
                name="name"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-100">Your Full Name is Required</span>
              )}
              <input
                {...register("email", { required: true })}
                className="p-2 rounded border border-[#00C957]"
                type="email"
                name="email"
                placeholder="Email"
              />

              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                  })}
                  className="p-2 rounded border border-[#00C957] w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <span
                  className="absolute top-3 right-2 text-xl text-[#0064A5]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-100">Password field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-100">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-100">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-100">
                  Password at least one uppercase, one lowercase, one number and
                  one special character
                </span>
              )}

              <select
                defaultValue="default"
                name="role"
                {...register("role", { required: true })}
                className="select select-bordered w-full p-2 rounded"
              >
                <option disabled value="default">
                  Select Role
                </option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
                <option value="admin">Admin</option>
              </select>

              <label className="text-white">Choose a profile picture</label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full my-6 file-input-bordered text-white"
              />

              <input
                className="p-2 border border-[#0064A5] bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer text-lg font-semibold"
                type="submit"
                value="Submit"
              />
            </form>
            <p className="p-4 text-center text-white">
              Have an account? Please
              <Link to="/login">
                <button className="text-green-200 pl-1">Login</button>
              </Link>
            </p>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
