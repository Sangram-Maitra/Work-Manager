"use client";

import { useContext, useEffect, useState } from "react";
import { deleteTask, getUserTask } from "../service/taskService";
import UserContext from "../context/userContext";
import "../list.css";
import TaskPage from "./TaskPage";
import { toast } from "react-toastify";

const ShowingTask = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  const loadingTasks = async (userId) => {
    try {
      const tasks = await getUserTask(userId);
      setTasks([tasks]);
      //   console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  //   const funct = async () => {
  //     await loadingTasks(context.user._id);
  //   };
  useEffect(() => {
    if (context.user) {
      //   console.log(context);
      loadingTasks(context.user._id);
    }
    // console.log(context);
    // funct();
  }, [context]);

  const deleteTaskParent = async (taskId) => {
    // console.log("this function is being called");
    try {
      const res = await deleteTask(taskId);
      const newTasks = tasks.filter((item) => item._id != taskId);
      console.log(newTasks);
      setTasks(newTasks);
      toast.success("Task Is deleted", { position: "top-center" });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <article className="todo__container">
          <header className="header">
            <figure className="figure">
              <img src="https://media.istockphoto.com/photos/spiral-bound-notebook-with-todo-list-on-white-wooden-table-with-and-picture-id1193498585?b=1&k=20&m=1193498585&s=170667a&w=0&h=fqPhCl9SoRJPWI9Knz800Ctg7cxc0GCbSREAf3oV03A=" />
              <figcaption className="title__caption">
                <h1 className="title title--primary">Todo's</h1>
                <h2 className="title title--secondary">to-do list</h2>
              </figcaption>
            </figure>
          </header>

          <section className="content">
            <ul className="list__container list__container--primary">
              {/* {console.log(tasks)} */}
              {/* <h1 style={{ color: "black" }}>No of tasks: {tasks[0].length}</h1> */}

              {tasks.length > 0 ? (
                tasks[0].map((task) => (
                  <TaskPage
                    task={task}
                    deleteTaskParent={deleteTaskParent}
                    key={task._id}
                  />
                ))
              ) : (
                <></>
              )}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
};

export default ShowingTask;
