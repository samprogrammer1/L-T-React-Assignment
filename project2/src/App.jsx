import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'
import Header from './component/Header';
import TaskList from './component/TaskList';
import Sample from './component/sample';

function App() {

  return (
    <>
       <Header />
      <TaskList />
      <Sample />
    </>
  )
}

export default App
