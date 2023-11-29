import Title from "../../../Components/Title/Title";

const ProductSuite = () => {
  return (
    <div className="pb-16 font-workSans">
      <div className="">
        <Title
          heading="Join an Attractive & Employee Management Service"
          paragraph="Our system analysis the data behavior of your employees and generate
        tasks and assign to the best person that can complete it efficiently
        and more."
        ></Title>
      </div>
      <div>
        <img
          className="w-[80%] mx-auto rounded-xl"
          src="https://i.ibb.co/6gY0HcM/employee-dash-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductSuite;
