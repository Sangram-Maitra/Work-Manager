import { httpsTaksService } from "../helper/axiosHelper";

export const addTask = async (task) => {
  const res = await httpsTaksService
    .post("/api/tasks", task)
    .then(function (response) {
      return response.data;
    });
  return res;
};

//  fixed ////////////////////////
export const getUserTask = async (userId) => {
  const res = await httpsTaksService
    .get(`/api/users/${userId}/tasks`)
    .then(function (response) {
      return response.data;
    });
  // console.log("This is inside userService" + res);
  return res;
};

export const deleteTask = async (taskId) => {
  const res = await httpsTaksService
    .delete(`/api/tasks/${taskId}`)
    .then(function (response) {
      return response.data;
    });
  return res;
};
