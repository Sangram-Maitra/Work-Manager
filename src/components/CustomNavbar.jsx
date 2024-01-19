"use client";

import UserContext from "@/app/context/userContext";
import { logoutUser } from "@/app/service/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      console.log("Logged out successfully");
      context.setUser(undefined);
      toast.success("Logged Out Succesfully", { position: "top-center" });
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Error in Logged Out", { position: "top-center" });
    }
  };
  return (
    <nav className="text-white bg-blue-500 flex py-2 px-4 pl-12 pr-12 justify-between ">
      <div className="brand">
        <h1 className="text-2xl font-semibold">Work Manager</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user && (
            <>
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-task" className="hover:text-blue-200">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user ? (
            <>
              <li>
                <Link href="/">{context.user.name}</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">SignIn</Link>
              </li>
              <li>
                <Link href="/signup">SignUP</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
