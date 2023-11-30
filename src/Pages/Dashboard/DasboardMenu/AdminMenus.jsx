import { Link, NavLink } from "react-router-dom";
// import { GrUserAdmin } from "react-icons/gr";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
const AdminMenus = () => {
  return (
    <>
      <Link to="/dashboard/adminHome">
        <h2 className="text-start text-xl  border-b-2 border-light-blue-600">
          Admin Dashboard
        </h2>
      </Link>
      {/* <NavLink to="/dashboard/adminHome" className={`flex items-center gap-2`}>
        <GrUserAdmin className="text-green-400 text-2xl"></GrUserAdmin>
        <button className="w-full">Admin</button>
      </NavLink> */}
      <NavLink
        to="/dashboard/addEmployee"
        className={`flex items-center gap-2`}
      >
        <FaUserCheck className="text-green-400 text-2xl"></FaUserCheck>
        <button className="w-full">Add Employee</button>
      </NavLink>

      <NavLink to="/dashboard/allUsers" className={`flex items-center gap-2`}>
        <FaUsers className="text-green-400 text-2xl"></FaUsers>
        <button className="w-full">Employees List</button>
      </NavLink>

      <NavLink
        to="/dashboard/workSheetList"
        className={`flex items-center gap-2`}
      >
        <BiTask className="text-green-400 text-2xl"></BiTask>
        <button className="w-full">Employee Task List</button>
      </NavLink>

      <NavLink
        to="/dashboard/paymentHistory"
        className={`flex items-center gap-2`}
      >
        <FaMoneyCheckDollar className="text-green-400 text-2xl"></FaMoneyCheckDollar>
        <button className="w-full">Payment History</button>
      </NavLink>
    </>
  );
};

export default AdminMenus;
