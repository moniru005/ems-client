import { NavLink } from "react-router-dom";

const AdminMenus = () => {
  return (
    <>
      <NavLink to="/dashboard/adminHome">
        <button className="w-full">Admin</button>
      </NavLink>
      <NavLink to="/dashboard/allUsers">
        <button className="w-full">Employees List</button>
      </NavLink>
     
    </>
  );
};

export default AdminMenus;
