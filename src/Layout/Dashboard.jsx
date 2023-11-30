import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../Layout/Dashboard.css";
import useAdmin from "../Hooks/useAdmin";
import AdminMenus from "../Pages/Dashboard/DasboardMenu/AdminMenus";
import EmployeeMenu from "../Pages/Dashboard/DasboardMenu/EmployeeMenu";
import HrMenus from "../Pages/Dashboard/DasboardMenu/HrMenus";
import { RingLoader } from 'react-spinners';


const Dashboard = () => {
  const [isAdmin, isHR, isAdminAndHRLoading] = useAdmin();

  //Dashboard Menu
  let menuComponent;
  if(isAdminAndHRLoading){
    menuComponent = <RingLoader color="#36d7b7"/>;
  }
  else if(isAdmin){
    menuComponent = <AdminMenus></AdminMenus>;
  }
  else if(isHR){
    menuComponent = <HrMenus></HrMenus>;
  }
  else{
    menuComponent = <EmployeeMenu></EmployeeMenu>;
  }

 


  return (
    <div className="flex">
      <Helmet>
        <title>Dashboard | EMS</title>
      </Helmet>

      {/* Dashboard Sidebar */}
      <div className="w-3/12">
        <div className="text-md font-workSans flex flex-col lg:flex-row gap-2 p-4 ">
          <ul className="sidebar flex flex-col gap-2 font-medium w-full ">
         
          {menuComponent}
          
          </ul>
        </div>
      </div>

      {/* Dashboard Contents */}
      <div className="w-9/12 flex p-4 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
