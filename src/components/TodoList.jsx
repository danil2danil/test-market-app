import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {counterDecrement, counterIncrement} from '../redux/counterSliсe'

function TodoList() {
const counter = useSelector((state)=>state.count.value)
const dispatch = useDispatch()


const handleIncrement = ()=>{
    dispatch(counterIncrement())
}

const handleDeccrement = ()=>{
    dispatch(counterDecrement())
}


  return (
    <div className="container">
        <h2 className="counter">{counter}</h2>
        <button onClick={handleIncrement} className="increment-btn">Увеличить на 1</button>
        <button onClick={handleDeccrement} className="decrement-btn">Уменьшить на 1</button>
    </div>
  )
}

export default TodoList