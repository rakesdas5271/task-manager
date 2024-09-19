import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { toggleCompletion, deleteTask, setEditTask } = useContext(TaskContext);

  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => toggleCompletion(task.id)}>Toggle Completion</button>
      <button onClick={() => setEditTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
