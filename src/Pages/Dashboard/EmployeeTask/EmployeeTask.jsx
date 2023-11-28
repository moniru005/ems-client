// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskList from "./TaskList";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EmployeeTask = () => {
  //   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  //   const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const selectedValue = watch("taskCategory", "default");
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
      const taskInfo = {
        taskCategory: data.taskCategory,
        taskDepartment: data.taskDepartment,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        computerId: data.computerId,
        image: res.data.data.display_url,
      };
      console.log(taskInfo);

      axiosPublic.post("/tasks", taskInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Your Task Successfully Saved`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          //   navigate("/");
        }
      });
    }
  };

  return (
    <div className="w-[900px;]">
      <Helmet>
        <title>Employee Task | EMS</title>
      </Helmet>
      <div className=" mb-4 flex flex-col lg:flex-row justify-center items-center font-workSans w-full">
        <div className=" rounded-lg bg-[#e7eff5] p-6">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-semibold text-balck">
              Employee Task
            </h2>
            <p className="text-center">
              <small>
                Employee should complete the task details using in this form
              </small>
            </p>
          </div>
          {/* form */}
          <div className="w-[800px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* Task Category */}
              <div className={`flex gap-2`}>
                <div className="w-1/2">
                  <select
                    id="taskCategory"
                    defaultValue="default"
                    {...register("taskCategory", {
                      required: "Please select your Task",
                    })}
                    className="select select-bordered w-full p-2 rounded"
                  >
                    <option value="">Select Task Category</option>
                    <option value="itServiceTicket">IT Service Ticket</option>
                    <option value="maintenanceService">
                      Maintenance Service
                    </option>
                    <option value="others">Others</option>
                  </select>
                  {errors.taskCategory && (
                    <span className="text-red-100">
                      {errors.taskCategory.message}
                    </span>
                  )}
                </div>

                {/* Department */}
                <div className="w-1/2">
                  <select
                    defaultValue="default"
                    disabled={selectedValue === "default"}
                    id="taskDepartment"
                    {...register("taskDepartment", {
                      required: "Please select your Department",
                    })}
                    className={`select select-bordered w-full p-2 rounded`}
                  >
                    <option value="">Select Department</option>
                    {selectedValue === "itServiceTicket" && (
                      <option value="it">IT </option>
                    )}
                    {selectedValue === "maintenanceService" && (
                      <option value="maintenance">Maintenance</option>
                    )}
                    {selectedValue === "others" && (
                      <>
                        <option value="purchase"> Purchase </option>
                        <option value="accounts">Accounts </option>
                      </>
                    )}
                  </select>
                  {errors.taskDepartment && (
                    <span className="text-red-100">
                      {errors.taskDepartment.message}
                    </span>
                  )}
                </div>
              </div>

              {/* First Name & Last Name */}
              <div className={`flex gap-2`}>
                {/* Name */}
                <div className="w-1/2 ">
                  <input
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="text-red-100">
                      Your Full Name is Required
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="w-1/2 ">
                  <input
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Last name"
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Last Name is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Email and Department */}
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
                {/* Phone Number */}
                <div className={`w-1/2`}>
                  <input
                    {...register("computerId", {
                      required: true,
                      maxLength: 10,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Computer ID"
                  />
                  {errors.computerId?.type === "required" && (
                    <span className="text-red-100">
                      Your Computer ID is Required
                    </span>
                  )}
                </div>
              </div>

              <label className="text-black">Upload your task image</label>
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

          {/* Data Table */}
          <div className="mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            <TaskList ></TaskList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTask;
