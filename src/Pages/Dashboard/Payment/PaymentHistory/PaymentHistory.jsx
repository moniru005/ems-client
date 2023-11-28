import useAdmin from "../../../../Hooks/useAdmin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const PaymentHistory = () => {
  //   const { removeUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isHR, isAdmin] = useAdmin();
  // console.log(isHR);

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





  // Make Admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change your Role Admin now? ",
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





  return (
    <div className="border-2  font-workSans w-[900px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center font-medium text-xl mb-4 ">
          <h2 className=" mb-4 text-center">All Transaction</h2>
        </div>
        <table id="" className="table-auto w-full border">
          <thead className="">
            <tr className="user-heading font-medium">
              <th className={`${!isHR ? "hidden" : ""}`}>SL</th>
              <th
                className={`${!isHR ? "hidden" : ""} ${
                  !isAdmin ? "hidden" : ""
                } `}
              >
                Photo
              </th>
              <th className="">Month</th>
              <th className="">Amount</th>

              <th className="">Salary</th>
            
            </tr>
          </thead>
          <tbody className="">
            <tr>
                <td></td>
                <td></td>
                <td></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
