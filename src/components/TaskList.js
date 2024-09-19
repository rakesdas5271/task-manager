import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  // Check if tasks is defined and is an array
  if (!Array.isArray(tasks)) {
    console.error('Tasks is not an array:', tasks);
    return <div>No tasks available.</div>;
  }

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <li>No tasks available.</li>
      )}
    </ul>
  );
};

export default TaskList;
