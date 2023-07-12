import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editChange, isCompletedChecked, onChecked, onDelete, onEfect, onchangeEdite } from "../features/slice/todoSlice";
import './AddTodo.css'
const AddTodo = () => {
 let {todo} = useSelector(state=>state.todo)

 const dispatch = useDispatch();
 useEffect(()=>{
    dispatch(onEfect())
 },[])
  const handleEdit = (index) => {
    dispatch(editChange(index))
  };
  const handleChange = (index,name,value) => {

    dispatch(onchangeEdite({
        index,
        name,value
    }))
  }
  const handleChecked = (index) => {
    dispatch(onChecked(index))
  }
  const handleDelete = (index) => {
    dispatch(onDelete(index))
  }
  const isCompleted = () =>{
    dispatch(isCompletedChecked())
  }
  return (
    <div className="container">
      {todo && todo.map((elem, index) => (
        <div className="added_todo" key={index}>
          <input type="text"  value={elem.title} disabled={elem.isDisabled} 
            onChange={(e)=>handleChange(index, "title", e.target.value)}
          />
          <input
            type="text"
            value={elem.description}
            disabled={elem.isDisabled}

            onChange={(e)=>handleChange(index, "description", e.target.value)}

          />
          <input type="text" value={elem.deadline} disabled={elem.isDisabled}  onChange={(e)=>handleChange(index, "deadline", e.target.value)}/>
          <input type="checkbox"  checked={elem.isChecked}  onChange={()=>handleChecked(index)}/>
          <button  class="btn btn-delete"  onClick={() => handleEdit(index)}>
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>{elem.isDisabled ? "Edite":"Change"}</span>
          </button>
          <button  class="btn btn-delete"  onClick={()=>handleDelete(index)}>
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>Delete</span>
          </button>
        </div>
      ))}
        <button class="super-button" onClick={isCompleted}>Filter  ToDo List</button>
    </div>
  );
};

export default AddTodo;
