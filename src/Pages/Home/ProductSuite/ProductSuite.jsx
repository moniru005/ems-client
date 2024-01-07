import Title from "../../../Components/Title/Title";

const ProductSuite = () => {
  return (
    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className=" font-workSans">
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
          src="https://i.ibb.co/H7wScRn/admin-panel.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductSuite;
