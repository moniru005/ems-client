import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Components/Loading/Loading";



const PaymentHistory = () => {
  //   const { removeUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();
  // console.log(isHR);


  //fetch from salaries api
  const {
    data: salaries = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["salaries"],
    queryFn: async () => {
      const res = await axiosSecure.get("/salaries");
      return res.data;
    },
  });

  //Search Transaction
  const filteredData = salaries.filter((salary) => {
    const query = searchQuery.toLowerCase();
    const salaryMonth = salary.month.toLowerCase();
    const userSalary = salary.salary;
    const paymentTransactionId = salary?.transactionId?.toLowerCase();

    return salaryMonth.includes(query) ||
    userSalary?.includes(query) ||
    paymentTransactionId?.includes(query);
  });

  if(loading){
    <Loading></Loading>
  }

  return (
    <div className="border-2  font-workSans w-[900px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center font-medium mb-4 ">
          <h2 className="text-center text-xl ">All Transaction ({filteredData.length})</h2>
          <div className=" lg:ml-8 flex gap-4">
            <input
              className="p-2 border border-[#8e8e8e] font-workSans font-medium rounded-lg"
              type="text"
              placeholder="Search any key"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
              filteredData.map(salary=> <tr key={salary._id}>
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
