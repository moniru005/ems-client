import { NavLink } from "react-router-dom";

const EmployeeMenu = () => {
  return (
    <>
      <NavLink to="/dashboard/employeeHome">
        <button className="w-full">HR DEPT</button>
      </NavLink>
      
    </>
  );
};

export default EmployeeMenu;
