"use client";
import React from "react";
import "./buttonStyle.css";

const TaskPage = ({ task, deleteTaskParent }) => {
  const handleTask = () => {
    try {
      // console.log(task._id);
      deleteTaskParent(task._id);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("this is from the task Page" + task);
  return (
    <>
      <li className="list__item list__item--primary">
        <input type="checkbox" id="list-input1" className="list-input1" />
        <label htmlFor="list-input1" className="list-input-label">
          <span className="text--primary ">
            {task.title}
            {/* <span>+</span> */}
          </span>
          <span className="icon">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-3 py-1.5 overflow-hidden font-bold rounded-full group"
              onClick={() => {
                handleTask();
              }}
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]" />
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8" />
              <span className="relative w-full text-left text-blbg-black transition-colors duration-200 ease-in-out group-hover:text-gray-200">
                X
              </span>
              <span className="absolute inset-0 border-2 border-blbg-black rounded-full" />
            </a>

            {/* <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-2001 rounded-lg text-sm px-1 py-1 me-1 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              X
            </button> */}
            <i className="fas fa-check" />
          </span>
        </label>
        <ul className="list__container list__container--secondary">
          <li className="list__item list__item--secondary">
            <p className="text--secondary">{task.content}</p>
          </li>
        </ul>
      </li>
    </>
  );
};

export default TaskPage;
