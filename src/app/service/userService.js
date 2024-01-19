import { httpsTaksService } from "../helper/axiosHelper";

export const addUser = async (data) => {
  const res = await httpsTaksService
    .post("/api/users", data)
    .then(function (response) {
      return response.data;
    });
  return res;
};

export const loginUser = async (data) => {
  const res = await httpsTaksService
    .post("/api/login", data)
    .then(function (response) {
      return response.data;
    });
  // console.log("This is inside userService" + res);
  return res;
};

export const currentUser = async () => {
  const res = await httpsTaksService.get("/api/current").then((response) => {
    return response.data;
  });
  // console.log("This is inside userService" + res);
  return res;
};

export const logoutUser = async () => {
  const res = await httpsTaksService
    .post("/api/logout")
    .then(function (response) {
      return response.data;
    });
  // console.log("This is inside userService" + res);
  return res;
};
