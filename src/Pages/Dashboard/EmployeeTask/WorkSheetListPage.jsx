import TaskList from "./TaskList";

const WorkSheetListPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col border rounded-t-md full">
          <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-green-400 to-blue-500 w-full">
            <h3 className="text-3xl text-white flex flex-col text-center">
              <span className="">Completed Task</span>
            </h3>
            <p className="text-center">
              <small>All employees completed task List are here.</small>
            </p>
          </div>
          <TaskList> </TaskList>;
        </div>
      </div>
    </>
  );
};

export default WorkSheetListPage;
