import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Filter = () => {
  const { filterTasks, setFilter } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('active')}>Active</button>
    </div>
  );
};

export default Filter;
