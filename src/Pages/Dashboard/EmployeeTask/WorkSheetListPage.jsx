// import { useState } from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const WorkSheetListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");
  const axiosSecure = useAxiosSecure();

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


  const filteredTasks = tasks.filter((task) => {
    const search = task.tasksCategory.toLowerCase();
    const query = searchQuery.toLowerCase();
    const taskDate = task.date;
    const taskHours = task.hours;

    return search.includes(query) || 
    taskDate.includes(query) || taskHours.includes(query);
    // && (selectedDate === "" || taskDate === selectedDate);
  });

  return (
    <div>
      <TaskList 
      filteredTasks={filteredTasks} 
      refetch={refetch}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      >

      </TaskList>
    </div>
  );
};

export default WorkSheetListPage;
