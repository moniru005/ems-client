import { FaSuitcase } from "react-icons/fa";

const HappyClient = () => {
  return (
    <div className=" font-workSans">
      <div
        className={`relative  mt-12 font-workSans bg-gradient-to-r from-[#0C1632] to-[#0064A5] h-[950px] lg:h-[350px] mx-auto flex justify-center `}
      >
        <div className="lg:top-12 top-5 flex flex-col lg:flex-row  items-center justify-evenly mx-auto gap-12 w-full">
          {/* card-1 */}
          <div className="w-64 flex flex-col justify-center items-center lg:px-2 lg:py-1 text-white ">
            <div className="w-28 text-6xl p-4 bg-[#00C957] rounded-tl-badge rounded-br-badge mb-4">
              <FaSuitcase className="text-center" />
            </div>
            <h2 className=" text-xl lg:text-5xl  font-bold flex flex-col lg:gap-y-3 pb-3">
              42
            </h2>
            <p className="lg:text-2xl font-semibold">Completed Project</p>
          </div>
          {/* card-2 */}
          <div className="w-64 flex flex-col justify-center items-center lg:px-2 lg:py-1 text-white ">
            <div className="w-28 text-6xl p-4 bg-[#00C957] rounded-tl-badge rounded-br-badge mb-4">
              <FaSuitcase className="text-center" />
            </div>
            <h2 className=" text-xl lg:text-5xl  font-bold flex flex-col lg:gap-y-3 pb-3">
              123
            </h2>
            <p className="lg:text-2xl font-semibold">Happy Clients</p>
          </div>
          {/* card-2 */}
          <div className="w-64 flex flex-col justify-center items-center lg:px-2 lg:py-1 text-white ">
            <div className="w-28 text-6xl p-4 bg-[#00C957] rounded-tl-badge rounded-br-badge mb-4">
              <FaSuitcase className="text-center" />
            </div>
            <h2 className=" text-xl lg:text-5xl  font-bold flex flex-col lg:gap-y-3 pb-3">
              459
            </h2>
            <p className="lg:text-2xl font-semibold">Customer Service</p>
          </div>
          {/* card-2 */}
          <div className="w-64 flex flex-col justify-center items-center lg:px-2 lg:py-1 text-white ">
            <div className="w-28 text-6xl p-4 bg-[#00C957] rounded-tl-badge rounded-br-badge mb-4">
              <FaSuitcase className="text-center" />
            </div>
            <h2 className=" text-xl lg:text-5xl  font-bold flex flex-col lg:gap-y-3 pb-3">
              567
            </h2>
            <p className="lg:text-2xl font-semibold">Q & A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
