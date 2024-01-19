"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { currentUser, loginUser } from "../service/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "../context/userContext";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const context = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(data);
      // console.log(res);
      const userData = await currentUser();
      toast.success("User Logged In", { position: "top-center" });
      // console.log("User Logged In");
      context.setUser(userData);
      router.push("/profile/user");
      // location.reload();
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          WorkManager
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(event) => {
                    setData({ ...data, email: event.target.value });
                  }}
                  value={data.email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="user_password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(event) => {
                    setData({ ...data, password: event.target.value });
                  }}
                  value={data.password}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign In
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't Have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </Link>
              </p>
            </form>
            {/* {JSON.stringify(data)} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
