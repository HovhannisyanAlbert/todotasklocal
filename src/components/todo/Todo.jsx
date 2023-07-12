import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, onchange } from '../features/slice/todoSlice'
import './Todo.css'

const Todo = () => {
    
const dispatch = useDispatch()
const {info} = useSelector(state=> state.todo)
    const handleChange = (e) => {
        const {value,dataset} = e.target;
        dispatch(onchange({...info,[dataset.id]:value}))
    }
    const handleClick = () => {
        dispatch(addTodo(info))
    }
  return (
    <div className='container_todo'>
        <input  placeholder='title' type='text' data-id="title" value={info.title}  onChange={handleChange}/>
        <input  placeholder='description' type='text' data-id="description" value={info.description} onChange={handleChange}/>
        <input  placeholder='deadline' type='text' data-id="deadline" value={info.deadline} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Todo