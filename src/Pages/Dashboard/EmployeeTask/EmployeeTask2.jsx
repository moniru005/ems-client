// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskList2 from "./TaskList2";
import useAuth from "../../../Hooks/useAuth";
import useTask from "../../../Hooks/useTask";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EmployeeTask2 = () => {
  //   const navigate = useNavigate();
  const {user} = useAuth();
  const [, , refetch] = useTask();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  //   const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const selectedValue = watch("taskTitle", "default");
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
        taskTitle: data.taskTitle,
        taskDepartment: data.taskDepartment,
        description: data.description,
        hours: data.hours,
        date: data.date,
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
          refetch();
        }
      });
    }
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>Employee Task | EMS</title>
      </Helmet>
      <div className="w-full">
        <div className="">
          <div className=" border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-green-400 to-blue-500 px-2">
          <h3 className="text-3xl text-white flex flex-col text-center w-full">
            <span className="">Employee Task</span>
          </h3>
          <p className="text-center w-full">
            <small>Employee should complete the task details using in this form</small>
          </p>
          </div>
          {/* form */}
          <div className="rounded-lg p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* Task Title */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                <div className="w-full lg:w-1/2">
                  <select
                    id="taskTitle"
                    defaultValue="default"
                    {...register("taskTitle", {
                      required: "Please select your Task",
                    })}
                    className="select select-bordered w-full p-2 rounded"
                  >
                    <option value="">Select Task Title</option>
                    <option value="sales">Sales</option>
                    <option value="support">
                      Support
                    </option>
                    <option value="others">Others</option>
                  </select>
                  {errors.taskTitle && (
                    <span className="text-red-100">
                      {errors.taskTitle.message}
                    </span>
                  )}
                </div>

                {/* Department */}
                <div className="w-full lg:w-1/2">
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
                    {selectedValue === "sales" && (
                      <option value="sales">Sales</option>
                    )}
                    {selectedValue === "support" && (
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

              {/* Hours & Date */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Hours */}
                <div className="w-full lg:w-1/2 ">
                <label className="w-full pl-1">Task Hours</label>
                  <input
                    {...register("hours", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="number"
                    placeholder="Hours"
                  />
                  {errors.hours && (
                    <span className="text-red-100">
                      Hours is Required
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="w-full lg:w-1/2 ">
                <label className="w-full pl-1">Task Date</label>
                  <input
                    {...register("date", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="date"
                    placeholder="Date"
                  />
                  {errors.date && (
                    <span className="text-red-100">
                      Date is Required
                    </span>
                  )}
                </div>
              </div>
              {/* Description */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                <div className="w-full ">
                <label className="w-full pl-1 ">Task Description</label>
                  <textarea
                    {...register("description", {
                      required: true,
                    })}
                    rows="10"
                    className="h-12 p-2 rounded border border-[#00C957] w-full"
                    placeholder="Description"
                  > </textarea>
                  {errors.description && (
                    <span className="text-red-100">
                      Description is Required
                    </span>
                  )}
                </div>
              </div>
              {/* First Name & Last Name */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Name */}
                <div className="w-full ">
                  <input
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Name"
                    
                  />
                  {errors.firstName && (
                    <span className="text-red-100">
                      Your Full Name is Required
                    </span>
                  )}
                </div>

                {/* Last Name */}
                {/* <div className="w-full lg:w-1/2 ">
                  <input
                    {...register("lastName", {
                      maxLength: 20,
                    })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="text"
                    placeholder="Last name"
                  />
                  
                </div> */}
              </div>

              {/* Email and Department */}
              <div className={`flex flex-col lg:flex-row gap-2 pt-2`}>
                {/* Email */}
                <div className="w-full lg:w-1/2">
                  <input
                    {...register("email", { required: true })}
                    className="p-2 rounded border border-[#00C957] w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={user.email}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-100">Your Email is required</span>
                  )}
                </div>
                {/* Phone Number */}
                <div className={`w-full lg:w-1/2`}>
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

              <div className="pt-3">
                <label className="text-black">Upload your task image</label>
                <input
                  {...register("image", { required: "Please upload a file" })}
                  type="file"
                  id="fileInput"
                  className="file-input w-full my-2 file-input-bordered text-black"
                />
                {errors.image && (
                  <p className="text-red-200">{errors.image.message}</p>
                )}
              </div>

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
            <TaskList2></TaskList2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTask2;
