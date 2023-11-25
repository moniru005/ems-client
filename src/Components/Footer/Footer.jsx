import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="font-workSans">
      <hr className=" border-blue-gray-50" />
      <footer className=" flex flex-row w-full bg-white p-4 shadow-xl items-center justify-between">
        <div>
          <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            © {currentYear} Employee Management System
          </p>
        </div>
        <div className="flex flex-row gap-6 text-xl">
          <button>
            <FaFacebook></FaFacebook>
          </button>
          <button>
            <FaTwitter></FaTwitter>
          </button>
          <button>
            <FaLinkedin></FaLinkedin>
          </button>
          <button>
            <FaInstagram></FaInstagram>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
