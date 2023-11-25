import { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useAuth();
  const navigate = useNavigate();



  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Successfully Logged out",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navbar = (
    <>
      <div className="text-md font-workSans flex flex-col lg:flex-row gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </div>
    </>
  );

  const loginButton = (
    <>
      <Link to='login'>
        <button
          className="middle none center hidden rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Login</span>
        </button>
      </Link>
    </>
  );
  
  const logOutButton = (
    <>
      <Link to='login'>
        <button
        onClick={handleLogOut}
          className="middle none center hidden rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Logout</span>
        </button>
      </Link>
    </>
  );

  return (
    <div>
      <nav className="mx-auto block w-full max-w-[1200px] border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 font-workSans">
        <div>
          <div className="container mx-auto flex items-center justify-between text-gray-900">
            {/* Logo */}
            <div className="flex flex-col justify-center items-center">
              <img className="w-12" src="/public/logo-1.png" alt="" />
              <a
                href="#"
                className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <span className=" text-xl font-medium">EMSystem</span>
              </a>
            </div>

            {/* Horizontal Navbar */}
            <ul className="hidden items-center gap-6 lg:flex">{navbar}</ul>

            

            {
              user? <>
              <div className="flex flex-row gap-2 items-center">
                <span>{user.displayName}</span>
                <span>{logOutButton}</span>
              </div>
              </>
              :
              // Right Button (Login Button)
              loginButton
            }

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              data-collapse-target="navbar"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                {isOpen === true ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaAlignJustify className="text-lg"></FaAlignJustify>
                )}
              </span>
            </button>
          </div>

          <div className={`container mx-auto pb-2 `}>
            <ul
              className={`mt-2 mb-4 flex flex-col gap-2
              ${isOpen ? "" : "hidden"} text-black`}
            >
              {navbar}

              <Link to="/login">
                <button
                  className="middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#00C957] py-2 mt-10 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                >
                  <span>Login</span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
