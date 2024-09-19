import React, { createContext, useReducer, useState } from 'react';
import tasksData from '../data/tasks.json'; // Ensure this path is correct

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { ...action.payload, id: Date.now(), completed: false }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETION':
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'EDIT_TASK':
      return state.map(task => 
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData || []); // Initialize to tasksData or an empty array
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: task });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });
  const toggleCompletion = (id) => dispatch({ type: 'TOGGLE_COMPLETION', payload: id });
  const editTask = (task) => dispatch({ type: 'EDIT_TASK', payload: task });

  const setEditTask = (task) => setCurrentTask(task);
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleCompletion, editTask, currentTask, setCurrentTask, setEditTask,setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
