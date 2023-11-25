import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import '../Layout/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>Dashboard | EMS</title>
      </Helmet>

      {/* Dashboard Sidebar */}
      <div className="w-64 min-h-full bg-[#e7eff5]">
        <div className="text-md font-workSans flex flex-col lg:flex-row gap-2 p-4">
          <ul className="sidebar flex flex-col gap-2 font-medium w-full">
         
            <NavLink to="/dashboard/adminHome">
                <button className="w-full">Admin</button>
            </NavLink>

            <NavLink to="/dashboard/employeeHome">
                <button className="w-full">Employee</button>
            </NavLink>

            <NavLink to="/dashboard/hrHome">
                <button className="w-full">HR DEPT</button>
            </NavLink>

            <NavLink to="/dashboard/allUsers">
                <button className="w-full">All Users</button>
            </NavLink>

          </ul>
        </div>
      </div>

      {/* Dashboard Contents */}
      <div className="flex p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
