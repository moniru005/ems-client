import Title from "../Title/Title";
import image from '../../assets/images/benefits.jpg';

const WhoCanUse = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-16 font-workSans">
      <div className="-mb-12 lg:mb-0">
        <Title
          heading="Who Can Use and Why?"
          paragraph="Tailored features enhance productivity and collaboration within specific user domains."
        ></Title>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="text-center lg:text-left text-lg lg:text-2xl font-bold pb-3">Target Users and Benefits</h2>
            <p className="text-justify  ">
            The task management website caters to developers, corporate professionals, bankers, students, educators, entrepreneurs, remote workers, project managers, creative professionals, and event planners. Developers benefit from coding task organization and version control integration. Corporate users streamline workflows and improve team communication with calendar views and file sharing. Bankers ensure compliance and manage financial tasks securely. Students and educators collaborate efficiently. Entrepreneurs oversee business tasks and client interactions via CRM integration. Remote workers track hours and manage tasks seamlessly. Project managers oversee projects using Gantt charts and resource allocation. Creative professionals and event planners manage projects effectively. Tailored features enhance productivity and collaboration within specific user domains.
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

export default WhoCanUse;