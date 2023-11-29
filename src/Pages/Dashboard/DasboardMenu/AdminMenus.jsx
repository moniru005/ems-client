import { NavLink } from "react-router-dom";

const AdminMenus = () => {
  return (
    <>
      <NavLink to="/dashboard/adminHome">
        <button className="w-full">Admin</button>
      </NavLink>
      <NavLink to="/dashboard/addEmployee">
        <button className="w-full">Add Employee</button>
      </NavLink>
      <NavLink to="/dashboard/allUsers">
        <button className="w-full">Employees List</button>
      </NavLink>
      <NavLink to="/dashboard/workSheetList">
        <button className="w-full">Employee Task List</button>
      </NavLink>
      <NavLink to="/dashboard/paymentHistory">
        <button className="w-full">Payment History</button>
      </NavLink>
    </>
  );
};

export default AdminMenus;
