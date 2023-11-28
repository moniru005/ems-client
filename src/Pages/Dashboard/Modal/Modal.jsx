import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
const Modal = ({ salary, name }) => {
  const axiosSecure = useAxiosSecure();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState(moment().year());

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

  const startYear = 2022;
  const endYear = moment().year();
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handlePay = (e) => {
    e.preventDefault();
    const month = selectedMonth;
    const year = selectedYear;

    const salaryInfo = {
      name: name,
      salary: salary,
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
          title: `${name} Salary has just been paid!`,
          showConfirmButton: false,
          timer: 2500,
        });
        payModal.close();
      }
    });
  };

  return (
    <dialog id="pay_modal" className="modal">
      <div className="modal-box font-workSans">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="text-lg flex flex-col">
          <span>Salary Pay</span>
          <span className="text-2xl font-semibold  text-[#0064A5]">{name}</span>
        </h3>
        <p className="py-2 text-3xl font-semibold text-light-green-900">
          {"$" + salary}
        </p>
        <form onSubmit={handlePay} className="">
          <div className="flex gap-2 justify-center mt-2">
            {/* Months */}
            <div className="flex flex-col gap-1">
              <label>Month</label>
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
              <label>Years</label>
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
          <input
            className={`mt-6 middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-1 px-6 text-lg uppercase text-white lg:inline-block font-workSans cursor-pointer`}
            type="submit"
            value="Pay"
          />
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
