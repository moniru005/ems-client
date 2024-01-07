
import image from '../../assets/images/about_02.jpg'
import image2 from '../../assets/images/about_01.jpg'
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="pt-16 max-w-[1200px] mx-auto pb-16 font-workSans">
    <Helmet> <title>About Page</title> </Helmet>
    {/* Row-1 */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="uppercase text-center lg:text-left text-xs lg:text-base pb-3">About us</h2>
            <h2 className="text-center lg:text-left text-lg lg:text-2xl font-bold pb-3">Welcome to EMSystem</h2>
            <p className="text-justify  ">
            We are a leading software development company that specializes in delivering innovative and customized software solutions to businesses worldwide. With a commitment to excellence and a passion for technology, we help our clients harness the power of software to drive growth, improve efficiency, and achieve their business goals.

            we offer a wide range of software development services tailored to meet the unique needs of our clients. Our team of experienced software engineers and developers possesses in-depth knowledge and expertise across various technologies and domains.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img
          className="w-[80%] mx-auto rounded-xl"
          src={image2}
          alt=""
        />
      </div>
      </div>
    {/* Row-2 */}
      <div className="max-w-6xl pt-12 mx-auto flex flex-col lg:flex-row-reverse px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="uppercase text-center lg:text-left text-xs lg:text-base pb-3">Who we are</h2>
            <h2 className="text-center lg:text-left text-lg lg:text-2xl font-bold pb-3">We Are EMSystem</h2>
            <p className="text-justify  ">
            EMSystem is a young and innovative mind having a zeal to do something useful and creative to grow beyond measure. we have a strong grasp over state-of-the-art technologies to define advantageous future that works as a bussiness trasformation catalyst.

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

export default About;