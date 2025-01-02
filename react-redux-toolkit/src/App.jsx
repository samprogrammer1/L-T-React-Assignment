import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increments } from './redux/features/counter/couterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increments());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }

  return (
    <>
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>Counter: {count}</p>
      <button onClick={handleDecrementClick} >-</button>
    </div>
      
    </>
  )
}

export default App
