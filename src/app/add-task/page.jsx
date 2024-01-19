"use client";
import React, { useState, useEffect } from "react";
import addImg from "../../assets/Add-task.svg";
import Image from "next/image";
import { addTask } from "../service/taskService";
import { toast } from "react-toastify";
const metaData = { title: "Add Task" };

const AddTask = () => {
  useEffect(() => {
    document.title = "Add Task";
  }, []);
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    // temporary solution
    // userId: "65981016226dc5231e8f949d",
    userId: "",
  });

  const clearData = () => {
    setTask({
      title: "",
      content: "",
      status: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await addTask(task);
      toast.success("Task is being added", { position: "top-right" });
      console.log(res);
      clearData();
    } catch (error) {
      toast.error("Taks is not being added", { position: "top-right" });
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5">
        <h1 className="text-3xl">Add your Task here</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div className="w-52 ml-32">
              <Image src={addImg} alt="LoginBannerImage" />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
                name="task_title"
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                value={task.title}
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  name="task_content"
                  onChange={(event) => {
                    setTask({
                      ...task,
                      content: event.target.value,
                    });
                  }}
                  value={task.content}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="task_status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>

              <select
                id="task_status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="task_status"
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                }}
                value={task.status}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="me-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Task
            </button>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={clearData}
            >
              Clear
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
