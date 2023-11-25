import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUserProfile } = useAuth();

  const onSubmit = (data) => {
    const imageFile = { image: data.image[0] };
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("Logged User", loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        console.log("User Profile Updated");
        const userInfo = {
          name: data.name,
          email: data.email,
        };
      });
    });
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center font-workSans">
      <div className="w-96 rounded-lg bg-gradient-to-tr from-[#095a90] to-[#6eb6e5] p-6">
        <div className="mb-8">
          <h2 className="text-2xl text-center font-semibold text-white">
            Please Sign Up
          </h2>
        </div>
        {/* form */}
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-full"
          >
            <input
              {...register("name", { required: true, maxLength: 20 })}
              className="p-2 rounded border border-[#00C957]"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
            {...register("email", { required: true})}
              className="p-2 rounded border border-[#00C957]"
              type="email"
              name="email"
              placeholder="Email"
            />

            <input
            {...register("password", { required: true})}
              className="p-2 rounded border border-[#00C957]"
              type="password"
              name="password"
              placeholder="Password"
            />
            <label className="text-white">
              Choose a profile picture
              <input
                {...register("image", { required: true})}
                className="p-2 rounded border border-[#00C957]"
                type="file"
                name="photoURL"
                placeholder="Password"
              />
            </label>

            <input
              className="p-2 border border-[#0064A5] bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer text-lg font-semibold"
              type="submit"
              value="Submit"
            />
          </form>
          <p className="p-4 text-center text-white">
            Have an account? Please
            <Link to="/login">
              <button className="text-green-200">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
