import "../AllUsers/AllUsers.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import { useState } from "react";


const TaskList2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");

  const axiosSecure = useAxiosSecure();
  const[isHR] = useAdmin();
  console.log(isHR);
 

  //fetch Task
  const { data: tasks = [], isLoading: loading, refetch, } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });


  //Search Filter
  const filteredTasks = tasks?.filter((task) => {
    const query = searchQuery.toLowerCase();
    const search = task.taskTitle?.toLowerCase();
    const taskDate = task.date;
    const taskHours = task.hours;
    const taskName = task.firstName?.toLowerCase();

    return search?.includes(query) || 
    taskDate?.includes(query) || taskHours?.includes(query) || taskName?.includes(query);
    
  });


// Task Delete   
const handleDeleteTask = (task) => {
    Swal.fire({
        title: `You want delete this Task?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            
            axiosSecure.delete(`/tasks/${task._id}`).then((res) => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your data has been deleted.",
                    icon: "success",
                  });
                  refetch();
                }
              });
        }
      });
  };

  //Loading
  if(loading){
    <Loading></Loading>
  }

  
  return (
    <div className="font-workSans w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex justify-between items-center font-medium mb-6 w-full">
          <h2 className="text-xl text-start w-full">All Task List: ({filteredTasks.length})</h2>
          <div className=" lg:ml-8 flex gap-4 ">
            <input
              className="p-2 border border-[#8e8e8e] font-workSans font-medium rounded-lg"
              type="text"
              placeholder="Search any key"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* <input
            className="p-2 border border-[#0064A5]"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            /> */}
          </div>
        </div>
        <table id="" className="lg:table-lg table-sm w-full border">
          <thead className="border">
            <tr className="user-heading font-medium">
              <th className={`border`}>SL</th>
              <th className="w-56 border">Name</th>
              <th className="border">Task</th>
              <th className="border">Department</th>
              <th className="border">Hours</th>
              <th className="border">Date</th>
              <th className="border">A</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks?.map((task, index) => (
              <tr key={task._id} className="user-body text-center">
                <td className={`border`}>{index + 1}</td>
                <td className="border capitalize flex flex-col items-center">
                    <img className="pt-2 rounded-badge w-12 h-12" src={task.image} alt="" />
                    <p>{task.firstName}</p>
                </td>
                <td className="border capitalize">{task.taskTitle}</td>
                <td className="border ">{task.taskDepartment}</td>
                <td className="border ">{task.hours}</td>
                <td className="border ">{task.date}</td>
                
                
                
                <td className={`border flex flex-col gap-2`}>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="bg-red-600 p-2 rounded w-8"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                  <button
                    className="bg-green-600 p-2 rounded w-8"
                  >
                    <FaEdit className="text-white"></FaEdit>
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TaskList2;
