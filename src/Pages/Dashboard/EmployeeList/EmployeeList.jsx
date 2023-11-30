import { Helmet } from "react-helmet-async";
import useDBUsers from "../../../Hooks/useDBUsers";

const EmployeeList = () => {
    const [users] = useDBUsers();
    return (
      <div className="border-2  font-workSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <h2 className="text-2xl font-bold mb-4">All Users</h2>
        <table id="" className="table-auto w-full">
          <thead>
            <tr className="user-heading">
              <th className="">SL</th>
              <th className="">Photo</th>
              <th className="">Name</th>
              <th className="">Role</th>
              <th className="">Email</th>
              <th className="">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id} className="user-body">
                <td className="border ">{index + 1}</td>
                <td className="border  w-24 h-24">
                  {" "}
                  <img src={item.image} alt="" />{" "}
                </td>
                <td className="border ">{item.name}</td>
                <td className="border ">{item.role}</td>
                <td className="border ">{item.email}</td>
                <td className="border ">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet>
      
      </Helmet>
        
      
    </div>
    );
};

export default EmployeeList;