// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskList from "./TaskList";
import useTask from "../../../Hooks/useTask";

const EmployeeWorkSheet = () => {
  const [, , refetch] = useTask();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.taskTitle.value;
    const description = form.description.value;
    const hours = form.hours.value;
    const date = form.date.value;

    const taskInfo = {
      taskTitle: taskTitle,
      description: description,
      hours: hours,
      date: date,
    };

    axiosPublic.post("/tasks", taskInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Your Task Successfully Saved`,
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        refetch();
      }
    });
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>Employee Task | EMS</title>
      </Helmet>

      <div className=" w-full ">
      <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-green-400 to-blue-500 w-full px-2">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">Employee Task</span>
          </h3>
          <p className="text-center">
            <small>Employee should complete the task details using in this form</small>
          </p>
        </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className=" w-full"> 
            <form onSubmit={onSubmit}>

              <div className="flex flex-col gap-y-4">
                {/* row-1 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* task Title */}
                  <div className="w-full lg:w-1/2">
                    <label className=" w-full pl-1">Task Title</label>
                    <select className="p-4 w-full h-14 rounded-lg border-gray-400 bg-white border" name="taskTitle" id="">
                      <option disabled>Select Task</option>
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="content">Content</option>
                      <option value="paperWork">Paper Work</option>
                    </select>
                  </div>
                  {/* hours */}
                  <div className="w-full lg:w-1/2">
                    <label className="w-full pl-1">Task Hours</label>
                    <input
                    className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    type="number"
                    name="hours"
                    placeholder="Hours"
                  />
                  </div>
                </div>

                {/* row-2 */}
                <div>
                  {/* Description */}
                  <div className="w-full">
                    <label className="w-full pl-1 ">Task Description</label>
                  <textarea name="description"
                    rows="10"
                    placeholder="Description" className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"></textarea>
                  </div>
                </div>

                {/* row-3 */}
                <div>
                  {/* Date */}
                  <div className="w-full">
                    <label className="w-4/12 pl-1 ">Task Date</label>
                    <input
                    className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    type="date"
                    name="date"
                    placeholder="Date"
                  />
                  </div>
                </div>
                
                
              </div>
              <input
                className="btn w-full mt-6 bg-[#0064A5] hover:bg-[#207fbe]  text-white"
                type="submit"
                value="Save Task"
              />
            </form>
          </div>

          {/* Data Table */}
          <div className="mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWorkSheet;
