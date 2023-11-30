import { Link, NavLink } from "react-router-dom";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
const EmployeeMenu = () => {
  return (
    <>
    <Link to="/dashboard/adminHome">
        <h2 className="text-start text-xl  border-b-2 border-light-blue-600">
          Employee Dashboard
        </h2>
      </Link>
      {/* <NavLink to="/dashboard/employeeHome">
        <button className="w-full">Employee Dashboard</button>
      </NavLink> */}
      {/* <NavLink to="/dashboard/employeeTask">
        <button className="w-full">Employee Task</button>
      </NavLink> */}
      <NavLink to="/dashboard/employeeWorkSheet" className={`flex items-center gap-2`}>
      <BiTask className="text-blue-400 text-2xl"></BiTask>
        <button className="w-full">Employee Task</button>
      </NavLink>
      <NavLink
        to="/dashboard/paymentHistory"
        className={`flex items-center gap-2`}
      >
        <FaMoneyCheckDollar className="text-blue-400 text-2xl"></FaMoneyCheckDollar>
        <button className="w-full">Payment History</button>
      </NavLink>
      
    </>
  );
};

export default EmployeeMenu;
