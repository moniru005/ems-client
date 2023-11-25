import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center font-workSans">
      <div className="w-96 h-96 rounded-lg bg-gradient-to-tr from-[#095a90] to-[#6eb6e5] p-6">
        <div className="mb-8">
          <h2 className="text-2xl text-center font-semibold text-white">Please Login</h2>
        </div>
        {/* form */}
        <div className="">
          <form className="flex flex-col space-y-8 w-full">
            <input
              className="p-4 rounded border border-[#00C957]"
              type="email"
              name="email"
              placeholder="Email"
            />

            <input
              className="p-4 rounded border border-[#00C957]"
              type="password"
              name="password"
              placeholder="Password"
            />

            <input
              className="p-4 border border-[#0064A5] bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer text-lg font-semibold"
              type="submit"
              value="Submit"
            />
          </form>
          <p className="p-4 text-center text-white">New here? <Link to='/register'> <button className="text-green-200">Register</button> </Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
