import Title from "../../../Components/Title/Title";

const Exclusive = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/YtRN50W/textured-1-3.jpg')] bg-cover">
      <Title heading="Check Out Some of the Exclusive Services"></Title>
      
      <div className="z-20">
        {/* row-1 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center ">
          {/* Card-1 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/VJNjHsr/employee.jpg"
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Manage Employees Data
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Manage employee data including contact information, employment records and performance metrics to ensure accurate HR administration.
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/0jqTcPm/payroll.jpg"
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Perfect Payroll
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Payroll is the process of paying employees for their work, including calculating taxes and deductions. Perfect payroll ensures accurate, timely payments with minimal effort.
              </p>
            </div>
          </div>

        

        </div>

        {/* row-2 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center ">
          {/* Card-1 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/rwY9s51/hr.jpg"
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Unique HRM
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Unique HRM is the practice of managing human resources in a way that maximizes each employee’s potential and contributes to achieving organizational goals.
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/j5XkTvx/accounting.jpg"
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Accurate Accounting
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Accurate accounting is the process of recording, classifying and summarizing financial transactions in an organized manner to ensure accuracy.
              </p>
            </div>
          </div>

         
        </div>

        
      </div>
      {/* -------- */}
    </div>
  );
};

export default Exclusive;
