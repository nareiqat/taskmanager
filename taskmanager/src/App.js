import React from 'react'
import TaskList from './components/TaskList';
import './App.css';
import TaskListContextProvider from './context/TaskListContext'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import Task from './components/Task';

function App() {
  return (
    <TaskListContextProvider>
      <div class="container">
        <div className="app-wrapper">
        <Header/>
          <div className="main">
          <TaskForm />
          <TaskList />
          <Task />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App

