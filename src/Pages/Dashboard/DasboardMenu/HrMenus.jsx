import { NavLink } from "react-router-dom";

const HrMenus = () => {
  return (
    <>
    <h2 className="text-center text-xl mb-6 border-b-2 border-light-blue-600">HR Dashboard</h2>
      {/* <NavLink to="/dashboard/hrHome">
        <button className="w-full">HR DEPT</button>
      </NavLink> */}
      {/* <NavLink to="/dashboard/employeeHome">
        <button className="w-full">Employee</button>
      </NavLink> */}
      <NavLink to="/dashboard/addEmployee">
        <button className="w-full">Add Employee</button>
      </NavLink>
      <NavLink to="/dashboard/allUsers">
        <button className="w-full">Employee List</button>
      </NavLink>
    </>
  );
};

export default HrMenus;
