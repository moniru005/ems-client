import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useValidatePhone from "../../../Hooks/useValidatePhone";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { validatePhoneNumber } = useValidatePhone();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const selectedValue = watch("role");
  console.log(selectedValue);




  // get users from user api
  const { data: users = [], refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //filtered to match with user id
  const {id} = useParams();
  const findUser = users.find(user => user._id === id);
//   console.log(findUser);

  //Update Employee
  const onSubmit = async (data) => {
    //image upload to imgBB and then get an url
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
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
          axiosPublic.patch(`/users/${findUser._id}`, userInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
                refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} Successfully Updated`,
                showConfirmButton: false,
                timer: 2500,
              });
              reset();
              navigate("/dashboard/allUsers");
            }
          });
    }
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Update Employee | EMS</title>
      </Helmet>
      <div className=" mb-4 flex flex-col lg:flex-row justify-center items-center font-workSans w-full">
        <div className=" rounded-lg bg-[#e7eff5] p-6">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-semibold text-balck">
              Update Employee
            </h2>
            <p className="text-center">
              <small>Update the employee details using in this form</small>
            </p>
          </div>
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
                    defaultValue={findUser?.name}
                  />
                  {errors.name && (
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
                    defaultValue={findUser?.designation}
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
                    type="number"
                    placeholder="Bank Account No."
                    defaultValue={findUser?.bankAccount}
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
                    type="number"
                    placeholder="Salary"
                    defaultValue={findUser?.salary}
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Salary is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Phone Number and Company */}
              <div className={`flex gap-2`}>
                {/* Phone Number */}
                <div className={`w-1/2`}>
                  <input
                    {...register("phone", { validate: validatePhoneNumber, maxLength: 11, })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="number"
                    placeholder="Phone"
                    defaultValue={findUser?.phone}
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
                    defaultValue={findUser?.company}
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
                    {...register("email", { required: true,})}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={findUser?.email}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-100">Your Email is required</span>
                  )}
                </div>

                {/* Role */}
              <div className="w-1/2">
                <select
                  id="role"
                  defaultValue={findUser?.role}
                  {...register("role", { required: "Please select your Role" })}
                  className="select select-bordered w-full p-2 rounded"
                >
                  <option value="">Select Role</option>
                  <option value="employee">Employee</option>
                  <option value="hr">HR</option>
                  <option disabled value="admin">Admin</option>
                </select>
                {errors.role && (
                  <span className="text-red-100">{errors.role.message}</span>
                )}
              </div>
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

export default UpdateEmployee;
