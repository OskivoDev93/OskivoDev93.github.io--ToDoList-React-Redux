import React from "react";
import Task from "./task";

const TaskList = ({ tasks, toggleTask }) => (
  <ul>
    {tasks.map(task => (
      <Task key={task.id} {...task} onClick={() => toggleTask(task.id)} />
    ))}
  </ul>
);

export default TaskList;
