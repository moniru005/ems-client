const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src="https://i.ibb.co/R3H02jp/banner-2.jpg" alt="" />
        <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>

        <div className="absolute top-5 ml-12 lg:top-[200px]  lg:ml-12 font-semibold">
          <h3 className="text-lg lg:text-3xl text-white my-3">Welcome</h3>
          <h1 className="text-xl lg:text-5xl text-white">
            <p>Next Generation Powered  </p>
            <p  className="lg:py-2">Employee Management Built </p>
            <p>With A Human Approach</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
