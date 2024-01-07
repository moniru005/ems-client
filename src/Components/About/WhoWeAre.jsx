import Title from "../Title/Title";
import image from '../../assets/images/about_02.jpg'

const WhoWeAre = () => {
  return (
    <div className="mx-auto pb-16 font-workSans bg-[url('./assets/images/abs-6.jpg')] bg-fixed bg-cover ">
      <div className="-mb-12 lg:mb-0">
        <Title
          heading="Who We Are"
          paragraph="EMSystem is a leading software development company that specializes in delivering innovative and customized software solutions to businesses worldwide. "
        ></Title>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="text-center lg:text-left text-lg lg:text-2xl font-bold pb-3">We Are EMSystem</h2>
            <p className="text-justify  ">
            We are a young and innovative mind having a zeal to do something useful and creative to grow beyond measure. we have a strong grasp over state-of-the-art technologies to define advantageous future that works as a bussiness trasformation catalyst.

            We provide a best IT solutions that includes Desktop Application, Mobile Application, Website desinging and development, Computer AMC, Database designing and graphics. We understand the client&apos;s requirement to fullfll the needs and also learn grow with them.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img
          className="w-[80%] mx-auto rounded-xl"
          src={image}
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default WhoWeAre;