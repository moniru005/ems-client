import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useValidatePhone from "../../../Hooks/useValidatePhone";
import useAdmin from "../../../Hooks/useAdmin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddEmployee = () => {
  const [isAdmin] = useAdmin();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { validatePhoneNumber } = useValidatePhone();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const selectedValue = watch("role");
  console.log(selectedValue);

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
            designation: data.designation,
            bankAccount: data.bankAccount,
            phone: data.phone,
            company: data.company,
            salary: data.salary,
            role: data.role,
          };

          console.log(userInfo);

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} Successfully Registered`,
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
              navigate("/");
            }
          });
        });
      });
    }
  };

  return (
    <div className="w-full border rounded-t-md">
      <Helmet>
        <title>Add Employee | EMS</title>
      </Helmet>
      <div className=" mb-4 flex flex-col justify-center items-center font-workSans w-full">
      <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-green-400 to-blue-500 w-full">
        <h3 className="text-3xl text-white flex flex-col text-center">
          <span className="">Add Employee</span>
        </h3>
        <p className="text-center">
              <small>Add the employee details using in this form</small>
            </p>
      </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className="w-[800px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* Name & Designation */}
              <div className={`flex gap-2`}>
                {/* Name */}
                <div className="w-1/2 ">
                  <input
                    {...register("name", { required: true, maxLength: 20 })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  {errors?.name && (
                    <span className="text-red-100">
                      Your Full Name is Required
                    </span>
                  )}
                </div>

                {/* Designation */}
                <div className="w-1/2 ">
                  <input
                    {...register("designation", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Designation"
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Designation is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Bank Account and Salary */}
              <div className={`flex gap-2`}>
                {/* Bank Account */}
                <div className={`w-1/2`}>
                  <input
                    {...register("bankAccount", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Bank Account No."
                  />

                  {errors.name && (
                    <span className="text-red-100">
                      Your Bank Account is Required
                    </span>
                  )}
                </div>
                {/* Salary */}
                <div className={`w-1/2`}>
                  <input
                    {...register("salary", { required: true, maxLength: 20 })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Salary"
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Salary is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Phone Number and Email */}
              <div className={`flex gap-2`}>
                {/* Phone Number */}
                <div className={`w-1/2`}>
                  <input
                    {...register("phone", { validate: validatePhoneNumber })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Phone"
                  />

                  {errors.phone && (
                    <span className="text-red-200">{errors.phone.message}</span>
                  )}
                </div>

                {/* Company */}
                <div className="w-1/2">
                  <input
                    {...register("company", { required: true })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    name="company"
                    placeholder="Company"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-100">Your Email is required</span>
                  )}
                </div>
              </div>

              {/* Email and Password */}
              <div className={`flex gap-2`}>
                {/* Email */}
                <div className="w-1/2">
                  <input
                    {...register("email", { required: true })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-100">Your Email is required</span>
                  )}
                </div>

                {/* Password */}
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
                  {/* Password Validation Message */}
                  <div className="w-96">
                    {errors.password?.type === "required" && (
                      <span className="text-red-100">
                        Password field is required
                      </span>
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
                        Password at least one uppercase, one lowercase, one
                        number and one special character
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="w-full">
                <select
                  id="role"
                  defaultValue="default"
                  {...register("role", { required: "Please select your Role" })}
                  className="select select-bordered w-full p-2 rounded"
                >
                  <option value="">Select Role</option>
                  <option value="employee">Employee</option>
                  <option value="hr">HR</option>
                  {isAdmin? <option value="admin">Admin</option>: ''}
                </select>
                {errors.role && (
                  <span className="text-red-100">{errors.role.message}</span>
                )}
              </div>

              <label className="text-black">Choose a profile picture</label>
              <input
                {...register("image", { required: "Please upload a file" })}
                type="file"
                id="fileInput"
                className="file-input w-full my-6 file-input-bordered text-black"
              />
              {errors.image && (
                <p className="text-red-200">{errors.image.message}</p>
              )}
              <div className="w-full">
                <input
                  className="p-2 border border-[#0064A5] bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer text-base font-medium w-full"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
