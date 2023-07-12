import AddTodo from "./components/todo/AddTodo";
import Todo from "./components/todo/Todo";


function App() {
  return (
   <>
   <h1 className="title">To Do list</h1>
   <Todo />
   <AddTodo />
   </>
  );
}

export default App;
