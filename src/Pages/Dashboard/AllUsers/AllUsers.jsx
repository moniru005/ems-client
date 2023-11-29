import "../AllUsers/AllUsers.css";
import { FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../Hooks/useAdmin";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import Loading from "../../../Components/Loading/Loading";
import { useState } from "react";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [isHR, isAdmin] = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(isHR);

  // get users from user api
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

//search users
const filteredUsers = users.filter((user) => {
  const query = searchQuery.toLowerCase();
  const userName = user.name.toLowerCase();
  const userEmail = user.email;
  const userDesignation = user?.designation?.toLowerCase();
  const userSalary = user.salary;
  const userRole = user?.role?.toLowerCase();


  return userName.includes(query) ||
   userEmail?.includes(query) ||
   userDesignation?.includes(query) ||
   userSalary?.includes(query) ||
   userRole?.includes(query);
  // && (selectedDate === "" || taskDate === selectedDate);
});


  if (loading) {
    return <Loading></Loading>
  }

  // Make Admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change your Role to Admin now? ",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  // Make HR
  const handleMakeHR = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change your Role to HR now? ",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/hr/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an HR Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  // Make Verified
  const handleVerify = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Verify? ",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/verify/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is Verified Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  // Make Fired
  const handleFired = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Fire Him/Her? ",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/fired/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is Fired Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  // User Delete
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: `You want delete ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="border-2  font-workSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center font-medium mb-4">
          <h2 className=" text-xl ">All Employees ({users.length})</h2>
          <div className=" lg:ml-8 flex gap-4">
            <input
              className="p-2 border border-[#8e8e8e] font-workSans font-medium rounded-lg"
              type="text"
              placeholder="Search any key"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <h2></h2>
        </div>
        <table className="table w-full">
          <thead className="border">
            <tr className="user-heading font-medium">
              <th className={`border ${!isHR ? "hidden" : ""}`}>SL</th>
              <th
                className={`border ${!isHR ? "hidden" : ""} ${
                  !isAdmin ? "hidden" : ""
                } `}
              >
                Photo
              </th>
              <th className="border">Name</th>
              <th className={`border `}>Email</th>
              <th className={`border ${!isHR ? "hidden" : ""}`}>Designation</th>
              <th className={`border ${!isAdmin ? "hidden" : ""}`}>Bank A/C</th>
              <th className="border">Salary</th>
              <th className={`border ${!isAdmin ? "hidden" : ""}`}>Verify</th>
              <th className={`border ${!isHR ? "hidden" : ""}`}>Make Ad/HR</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id} className="user-body text-center">
                <td className={`border ${!isHR ? "hidden" : ""} `}>
                  {index + 1}
                </td>
                <td
                  className={`border  w-24 h-24 ${!isHR ? "hidden" : ""} ${
                    !isAdmin ? "hidden" : ""
                  }`}
                >
                  <img src={user.image} alt="" />{" "}
                </td>
                <td className="border w-fit">{user.name}</td>
                <td className={`border `}>
                  {user.email}
                </td>
                <td className={`border ${!isHR ? "hidden" : ""}`}>
                  {user.designation}
                </td>
                <td className={`border ${!isAdmin ? "hidden" : ""}`}>
                  {user.bankAccount}
                </td>
                <td className="border ">{user.salary}</td>

                {/* Make Verified */}
                <td className={`border uppercase ${!isAdmin ? "hidden" : ""}`}>
                  {user.status === "verified" ? (
                    <p className="flex justify-center items-center">
                      <FaCheck className="text-2xl font-bold text-green-600 " />
                    </p>
                  ) : (
                    <button
                      onClick={() => handleVerify(user)}
                      className="btn btn-sm"
                    >
                      <RxCross2 className="text-2xl font-bold text-red-400 " />
                    </button>
                  )}
                </td>

                {/* Make Admin & HR*/}
                <td className={` border uppercase ${!isHR ? "hidden" : ""} flex flex-col gap-2`}>
                  {/* Make Admin */}
                  <div>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="middle none center hidden rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/70 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    >
                      <RiAdminFill className="text-xl"></RiAdminFill>
                    </button>
                  )}
                  </div>
                  {/* Make HR */}
                  <div>
                  {user.role === "hr" ? (
                  "HR"
                ) : (
                  <button
                    onClick={() => handleMakeHR(user)}
                    className="middle none center hidden rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/70 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  >
                    HR
                  </button>
                )}
                  </div>
                </td>

                {/* Delete User */}
                <td
                  className={`border ${!isHR ? "hidden" : ""} ${
                    !isAdmin ? "hidden" : ""
                  }`}
                >
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-red-600 p-2 rounded"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>

                {/* Pay Button */}
                <td className={`PAY border ${!isAdmin ? "hidden" : ""}`}>
               
                  <div>
                      <>
                        {user.status === "verified" ? (
                          <>
                            {/* <button
                            onClick={() =>
                              document.getElementById("pay_modal").showModal()
                            }
                            className={`middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 text-sm uppercase text-white lg:inline-block font-workSans`}
                          >
                            <span>Pay</span>
                          </button>
                          <Modal salary={user.salary} name={user.name}></Modal> */}

                            <Link to={`/dashboard/paymentPage/${user._id}`}>
                              <button
                                className={`middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 text-sm uppercase text-white lg:inline-block font-workSans`}
                              >
                                {" "}
                                <span>Pay</span>
                              </button>
                            </Link>
                          </>
                        ) : (
                          <button
                            disabled={true}
                            className={`middle none center rounded-lg bg-gray-400 py-2 px-4 text-sm lg:inline-block font-workSans`}
                          >
                            <span>Pay</span>
                          </button>
                        )}
                      </>
                  </div>

                </td>

                {/* Make Fired */}
                <td className={`border uppercase ${!isHR ? "hidden" : ""}`}>
                  {user.status === "Fired" ? (
                    <p className="font-semibold flex justify-center items-center text-red-600">
                      Fired
                    </p>
                  ) : (
                    <button
                      onClick={() => handleFired(user)}
                      className="btn btn-sm text-red-800"
                    >
                      Fire
                    </button>
                  )}
                </td>

                <td
                  className={`border ${
                    !isAdmin ? "hidden" : ""
                  } flex flex-col gap-2`}
                >
                  <Link to={`/dashboard/userDetails/${user._id}`}>
                    <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gradient-to-tr from-[#0064A5] to-[#00C957] hover:text-white  ">
                      Details
                    </button>
                  </Link>
                  <Link to={`/dashboard/updateEmployee/${user._id}`}>
                    <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gradient-to-tr from-[#0064A5] to-[#00C957] hover:text-white  ">
                      Update
                    </button>
                  </Link>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
