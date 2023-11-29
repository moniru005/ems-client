import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";



const PaymentPage = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const navigate = useNavigate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //generate unique id for transaction
  const generateTransactionId = () =>{
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    
    return `TXN_${timestamp}_${random}`;
  }
  
  // fetch from users api using tans-tack query
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

  //filtered to match with user id
  const {id} = useParams();
  const findUser = users.find(user => user._id === id);
  console.log(findUser);

  //create dynamic custom year
  const startYear = 2022;
  const endYear = moment().year();
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  //create dynamic custom months from array of months 
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handlePay = (e) => {
    e.preventDefault();
    const month = selectedMonth;
    const year = selectedYear;

    const salaryInfo = {
      transactionId: generateTransactionId(),
      name: findUser.name,
      salary: findUser.salary,
      month: month,
      year: year,
      status: "paid",
    };

    console.log(salaryInfo);
    axiosSecure.post("/salaries", salaryInfo).then((res) => {
        console.log(res.data);
        const payModal = document.getElementById('pay_modal');
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${findUser.name} Salary has just been paid!`,
          showConfirmButton: false,
          timer: 2500,
        });
        navigate('/dashboard/allUsers')
        payModal.close();
      }
    });
  };

  return (
    
      <div className="font-workSans border-2 w-[900px] pt-16">

        <h3 className="text-lg flex flex-col text-center">
          <span>Salary Pay</span>
          <span className="text-2xl font-semibold  text-[#0064A5]">
            {findUser.name}
            </span>
        </h3>
        <p className="text-center py-2 text-3xl font-semibold text-light-green-900">
        {'$'+findUser.salary}
        </p>
        <form onSubmit={handlePay} className="mx-auto">
          <div className="flex gap-2 justify-center mt-2">
            {/* Months */}
            <div className="flex flex-col gap-1">
              <label className="text-center">Month</label>
              <select
                required
                value={selectedMonth}
                onChange={handleMonthChange}
                className="p-2 border border-light-green-800 w-40 text-center"
              >
                <option value="">Select a Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* Years */}
            <div className="flex flex-col gap-1">
              <label className="text-center">Years</label>
              <select
                required
                value={selectedYear}
                onChange={handleYearChange}
                className="p-2 border border-light-green-800 w-40 text-center"
              >
                <option value="">Select a Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mx-auto mt-4 flex justify-center w-full">
          <input
            className={`rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-6 text-lg uppercase text-white font-workSans cursor-pointer w-72`}
            type="submit"
            value="Pay"
          />
          </div>
        </form>
      </div>

  );
};

export default PaymentPage;
