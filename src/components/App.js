import React from 'react';
import { TaskProvider } from '../context/TaskContext';
import TaskList from './TaskList';
import Filter from './Filter';
import TaskForm from './TaskForm';

const App = () => {
  return (
    <TaskProvider>
      <header>
        <h1>Task Manager</h1>
      </header>
      <TaskForm />
      <Filter />
      <TaskList />
    </TaskProvider>
  );
};

export default App;
