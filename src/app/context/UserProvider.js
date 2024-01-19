"use client";

import React, { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import { currentUser } from "../service/userService";
// import { connectToDB } from "../helper/db";
// connectToDB();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const context = useContext(UserContext);
  useEffect(() => {
    async function load() {
      try {
        const userData = await currentUser();

        if (userData.hasOwnProperty("_id")) {
          setUser({ ...userData });
        } else {
          setUser(undefined);
        }

        // console.log("helrselkrhslkrhesl;rh");
        // setUser({ ...userData });
      } catch (error) {
        console.log(error);
        setUser(undefined);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
