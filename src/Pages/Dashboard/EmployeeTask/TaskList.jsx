import { Helmet } from "react-helmet-async";
import "../AllUsers/AllUsers.css";
import { FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import { useState } from "react";


const TaskList = () => {
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
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    const search = task.tasksCategory.toLowerCase();
    const taskDate = task.date;
    const taskHours = task.hours;

    return search.includes(query) || 
    taskDate.includes(query) || taskHours.includes(query);
    // && (selectedDate === "" || taskDate === selectedDate);
  });


// User Delete   
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
        <table id="" className="table-auto w-full border">
          <thead className="border">
            <tr className="user-heading font-medium">
              <th className={`border`}>SL</th>
              <th className="w-56 border">Task</th>
              <th className="border">Hours</th>
              <th className="border">Date</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks?.map((task, index) => (
              <tr key={task._id} className="user-body text-center">
                <td className={`border`}>{index + 1}</td>
                <td className="border capitalize">{task.tasksCategory}</td>
                <td className="border ">{task.hours}</td>
                <td className="border ">{task.date}</td>
                
                
                
                <td className={`border`}>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="bg-red-600 p-2 rounded"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet></Helmet>
    </div>
  );
};

export default TaskList;
