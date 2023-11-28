import { Helmet } from "react-helmet-async";
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
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";


const AllUsers = () => {
  //   const { removeUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isHR, isAdmin] = useAdmin();
  // console.log(isHR);
  const [salary, setSalary] = useState("");

  const {
    data: users = [],
    // isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const {
    data: salaries = [],
    // isLoading: loading,
  } = useQuery({
    queryKey: ["salaries"],
    queryFn: async () => {
      const res = await axiosSecure.get("/salaries");
      return res.data;
    },
  });

  useEffect(() => {
    salaries.map((salary) => setSalary(salary.status));
  }, [salaries]);
  console.log("Status: ", salary);

  //   if(loading){
  //     return <progress className="progress w-56 flex justify-center items-center mx-auto"></progress>
  //   }

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
              title: `${user.name} is an Admin Now!`,
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
        <div className="flex justify-between font-medium text-xl ">
          <h2 className=" mb-4">All Employees</h2>
          <h2>Total Employees: {users.length}</h2>
        </div>
        <table id="" className="table-auto w-full">
          <thead>
            <tr className="user-heading font-medium">
              <th className={`${!isHR ? "hidden" : ""}`}>SL</th>
              <th
                className={`${!isHR ? "hidden" : ""} ${
                  !isAdmin ? "hidden" : ""
                } `}
              >
                Photo
              </th>
              <th className="w-56">Name</th>
              <th className={`${!isAdmin ? "hidden" : ""}`}>Email</th>
              <th className={`${!isHR ? "hidden" : ""}`}>Designation</th>
              <th className={`${!isAdmin ? "hidden" : ""}`}>Bank A/C</th>
              <th className="">Salary</th>
              <th className={`${!isAdmin ? "hidden" : ""}`}>Verify</th>
              <th className={`${!isHR ? "hidden" : ""}`}>Make Admin</th>
              <th className={`${!isHR ? "hidden" : ""}`}>Make HR</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                <td className="border w-56">{user.name}</td>
                <td className={`border ${!isAdmin ? "hidden" : ""}`}>{user.email}</td>
                <td className={`border ${!isHR ? "hidden" : ""}`}>{user.designation}</td>
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

                {/* Make Admin */}
                <td
                  className={` border uppercase ${!isHR ? "hidden" : ""} `}
                >
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="middle none center hidden rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/70 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">

                      <RiAdminFill className="text-xl"></RiAdminFill>
                    </button>
                  )}
                </td>

                {/* Make HR */}
                <td
                  className={`border uppercase ${!isHR ? "hidden" : ""} `}
                >
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
                </td>

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
                  {salary.status === "paid" ? (
                    <p>Paid</p>
                  ) : (
                    <>
                      {user.status === "verified" ? (
                        <>
                          <button
                            onClick={() =>
                              document.getElementById("pay_modal").showModal()
                            }
                            className={`middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 text-sm uppercase text-white lg:inline-block font-workSans`}
                          >
                            <span>Pay</span>
                          </button>
                          <Modal salary={user.salary} name={user.name}></Modal>
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
                  )}
                </td>

                {/* Make Fired */}
                <td className={`border uppercase `}>
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

                <Link to={`/dashboard/userDetails/${user._id}`}>
                  <td className={`border ${!isAdmin ? "hidden" : ""}`}>
                    <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gradient-to-tr from-[#0064A5] to-[#00C957] hover:text-white  ">
                      Details
                    </button>
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet></Helmet>
    </div>
  );
};

export default AllUsers;