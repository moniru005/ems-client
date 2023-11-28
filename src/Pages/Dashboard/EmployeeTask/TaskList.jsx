import { Helmet } from "react-helmet-async";
import "../AllUsers/AllUsers.css";
import { FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";


const TaskList = () => {
//   const { removeUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const[isHR, isAdmin] = useAdmin();
  console.log(isHR);

  const {
    data: tasks = [],
    // isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
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






  return (
    <div className="border-2  font-workSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between font-medium text-xl ">
          <h2 className=" mb-4">All Task List: ({tasks.length})</h2>
        </div>
        <table id="" className="table-auto w-full">
          <thead>
            <tr className="user-heading font-medium">
              <th className={`border`}>SL</th>
              <th className="w-56">Task</th>
              <th className="">Hours</th>
              <th className="">Date</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task, index) => (
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
