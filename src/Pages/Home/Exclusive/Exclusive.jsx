import React from "react";
import Title from "../../../Components/Title/Title";
import {
  FaCalculator,
  FaCcAmazonPay,
  FaRegHandPointer,
  FaUsers,
} from "react-icons/fa";

const Exclusive = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/YtRN50W/textured-1-3.jpg')] bg-cover">
      <Title heading="Check Out Some of the Exclusive Services"></Title>

      <div className="z-20">
        {/* row-1 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center ">
          <div className="font-workSans border border-black rounded hover:shadow-black shadow-lg p-4 my-4 w-80 bg-gradient-to-r from-white to-gray-100">
            <button className="p-4 bg-gradient-to-r from-white to-green-100 rounded-xl border">
              <FaUsers className="text-7xl text-[#0064A5]"></FaUsers>
            </button>
            <h2 className="text-xl text-[#0064A5] font-semibold py-4">
              Employees
            </h2>
            <p className="">
              Effective Backend management of company employees
            </p>
            <button className="py-6">Learn More...</button>
          </div>

          <div className="font-workSans border border-black rounded hover:shadow-black shadow-lg p-4 my-4 w-80 bg-gradient-to-r from-white to-gray-100">
            <button className="p-4 bg-gradient-to-r from-white to-green-100 rounded-xl border">
              <FaRegHandPointer className="text-7xl text-[#0064A5]"></FaRegHandPointer>
            </button>
            <h2 className="text-xl text-[#0064A5] font-semibold py-4">HRM</h2>
            <p className="">
              Real time insights on productivity. overtime & more
            </p>
            <button className="py-6">Learn More...</button>
          </div>
        </div>
        {/* row-2 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="font-workSans border border-black rounded hover:shadow-black shadow-lg p-4 my-4 w-80 bg-gradient-to-r from-white to-gray-100">
            <button className="p-4 bg-gradient-to-r from-white to-green-100 rounded-xl border">
              <FaCcAmazonPay className="text-7xl text-[#0064A5]"></FaCcAmazonPay>
            </button>
            <h2 className="text-xl text-[#0064A5] font-semibold py-4">
              Payroll
            </h2>
            <p className="">
              Automated & secure salary calculation & disbursal
            </p>
            <button className="py-6">Learn More...</button>
          </div>

          <div className="font-workSans border border-black rounded hover:shadow-black shadow-lg p-4 my-4 w-80 bg-gradient-to-r from-white to-gray-100">
            <button className="p-4 bg-gradient-to-r from-white to-green-100 rounded-xl border">
              <FaCalculator className="text-7xl text-[#0064A5]"></FaCalculator>
            </button>
            <h2 className="text-xl text-[#0064A5] font-semibold py-4">
              Accounting
            </h2>
            <p className="">
              Effective Backend management of company finance
            </p>
            <button className="py-6">Learn More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
