import useAdmin from "../../../../Hooks/useAdmin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const PaymentHistory = () => {
  //   const { removeUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isHR, isAdmin] = useAdmin();
  // console.log(isHR);

  //fetch from users api
  const {
    data: users = [],
    // isLoading: loading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //fetch from salaries api
  const {
    data: salaries = [],
    // isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["salaries"],
    queryFn: async () => {
      const res = await axiosSecure.get("/salaries");
      return res.data;
    },
  });



  return (
    <div className="border-2  font-workSans w-[900px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center font-medium text-xl mb-4 ">
          <h2 className=" mb-4 text-center">All Transaction</h2>
        </div>
        <table id="" className="table-auto w-full border">
          <thead className="border">
            <tr className="user-heading font-medium border">
              <th className="border">Month</th>
              <th className="border">Salary Amount</th>
              <th className="border">Transaction ID</th>
            </tr>
          </thead>
          <tbody className="text-center border">
            {
              salaries.map(salary=> <tr key={salary._id}>
                <td className="border">{salary.month}</td>
                <td className="border">{salary.salary}</td>
                <td className="border">{salary.transactionId}</td>

            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
