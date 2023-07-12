import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
    info: {
      title: "",
      description: "",
      deadline: "",
      isDisabled: true,
      isChecked:false
    },
    todo: [],
  }
const todoSlice = createSlice({
  name: "todo",
  initialState,
  
  reducers: {
    onchange: (state, action) => {
      
      state.info = action.payload;
    },
    addTodo: (state, action) => {
      state.todo =  [action.payload]
      localStorage.setItem("todo",JSON.stringify(state.todo))
    },
    editChange: (state, action) => {
      const index = action.payload;
      state.todo[index].isDisabled = !state.todo[index].isDisabled;
      localStorage.setItem("todo",JSON.stringify(state.todo))
    },
    onchangeEdite:(state,action) =>{
        const {index,value,name} = action.payload
        state.todo[index][name] = value
       if(state.todo[index].isDisabled){
        localStorage.setItem("todo",JSON.stringify(state.todo))
       }

    },
    onChecked:(state,action)=>{
        
        const index= action.payload;
        state.todo[index].isChecked = !state.todo[index].isChecked
       localStorage.setItem("todo",JSON.stringify(state.todo))
    },
    onDelete : (state,action)=>{
        const index= action.payload;
        state.todo = state.todo.filter((el,id)=> id!== action.payload)
        localStorage.setItem("todo",JSON.stringify(state.todo))
    },
    isCompletedChecked:(state)=>{
        // const trueArr = [...state.todo.filter(el=>el.isChecked == true),...state.todo.filter(el=>el.isChecked == false)];
        const trueArr = state.todo.sort((a,b)=> {
          return b.isChecked - a.isChecked
        })
        state.todo = [...trueArr]
       
    },
    onEfect:(state)=>{
      state.todo = JSON.parse(localStorage.getItem("todo"))
    }
  },
});

export const { addTodo, onchange, editChange ,onchangeEdite, onChecked,onDelete,isCompletedChecked,onEfect} = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer;
