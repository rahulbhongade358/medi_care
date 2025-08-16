import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Login1 from "./../../assets/Doctors/login/Login1.png";
import userimg from "./../../assets/Doctors/username.png";
import passimg from "./../../assets/Doctors/password.png";
import role from "./../../assets/Doctors/role.png";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showpassword, setshowPassword] = useState(false);
  const { Login, user } = useContext(Authcontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Submit = (data) => {
    Login({
      username: data.username,
      password: data.password,
      role: data.role,
    });
    if (data.role === "Doctor") {
      navigate("/doctordashboard");
    } else if (data.role === "Nurse") {
      navigate("/nursedashboard");
    } else {
      navigate("/patientdashboard");
    }
  };
  return (
    <>
      <div className="mt-15 font-serif  text-gray-600 flex flex-col lg:flex-row justify-around items-center px-10 py-6">
        <img
          src={Login1}
          className="max-w-[450px] mb-8 lg:mb-0"
          alt="Login Visual"
        />

        <div className="w-full max-w-[400px] text-center  p-6 rounded-4xl shadow-xl  text-3xl">
          <h1 className="mb-6">Login Form</h1>

          <form
            onSubmit={handleSubmit(Submit)}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full max-w-md">
              <div className="flex items-center border-b border-gray-500 focus-within:border-indigo-400">
                <img src={userimg} alt="user icon" className="h-6 w-6 " />
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  {...register("username", { required: true })}
                  className="w-full text-center text-xl bg-transparent  focus:outline-none focus:border-indigo-400 py-3 placeholder-gray-500"
                />
                {errors.username && (
                  <p className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </p>
                )}
              </div>
            </div>
            <div className="w-full max-w-md">
              <div className="flex items-center border-b border-gray-500 focus-within:border-indigo-400">
                <img
                  src={passimg}
                  alt="pass icon"
                  className="h-6 w-6 items-center  "
                />

                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="w-full text-center text-xl bg-transparent  focus:outline-none focus:border-indigo-400 py-3 placeholder-gray-500"
                />
                <input
                  type="checkbox"
                  name=""
                  id="showpassword"
                  checked={showpassword}
                  onChange={() => setshowPassword((prev) => !prev)}
                />

                {errors.password && (
                  <p className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </p>
                )}
              </div>
            </div>
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 border-b border-gray-500 pb-4 focus-within:border-indigo-400">
                <div className="flex items-center gap-2">
                  <img src={role} alt="role icon" className="h-6 w-6" />
                  <label className="text-gray-600 text-xl">Login as...</label>
                </div>

                <div className="flex justify-between px-3">
                  {["Doctor", "Nurse", "Patient"].map((r) => (
                    <label key={r} className="flex items-center gap-2 text-lg">
                      <input
                        type="radio"
                        value={r}
                        {...register("role", { required: true })}
                      />
                      {r}
                    </label>
                  ))}
                </div>

                {errors.role && (
                  <p className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-2xl hover:bg-blue-600 transition-colors duration-200 text-white font-semibold rounded-2xl px-6 py-3 cursor-pointer shadow-md"
              />
            </div>
            <p className="text-[15px]">
              Don't have an account?
              <Link
                to="/signup"
                className="cursor-pointer text-blue-600 font-bold  hover:text-blue-700 hover:underline "
              >
                Singup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
