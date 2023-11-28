import { NavLink } from "react-router-dom";

const EmployeeMenu = () => {
  return (
    <>
    <h2 className="text-center text-xl mb-6 border-b-2 border-light-blue-600">Employee Dashboard</h2>
      {/* <NavLink to="/dashboard/employeeHome">
        <button className="w-full">Employee Dashboard</button>
      </NavLink> */}
      {/* <NavLink to="/dashboard/employeeTask">
        <button className="w-full">Employee Task</button>
      </NavLink> */}
      <NavLink to="/dashboard/employeeWorkSheet">
        <button className="w-full">Employee Task</button>
      </NavLink>
      <NavLink to="/dashboard/paymentHistory">
        <button className="w-full">Payment History</button>
      </NavLink>
      
    </>
  );
};

export default EmployeeMenu;
