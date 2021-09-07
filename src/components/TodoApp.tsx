import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
import {useState, useEffect} from 'react';
import HomePage from './HomePage'
import TodosPage from './TodosPage'
import AddTodosPage from './AddTodosPage'
import TodoInterface from '../types/TodoInterface';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SingleTodo from "./SingleTodo";
import Priority  from "../types/Priority";
const TodoApp = () => {
    const defaultTodos:TodoInterface[] = [];
    const [todos, setTodos]: [TodoInterface[], (todos:TodoInterface[] | ((todos:TodoInterface[])=>TodoInterface[]))=>void] = useState(defaultTodos)
    const [idNum, setIdNum] = useState(0)
   

    const addToDo = (todo:TodoInterface) =>{
      setTodos((oldTodos:TodoInterface[])=>{ //always return the new state value if using a function inside of set method
        const newTodos = [...todos, todo]
        return newTodos
      })
    }
    const deleteToDo = (id:number) =>{
      const newTodoList = todos.filter((todo:TodoInterface)=>todo.id!==id)
      setTodos(newTodoList)
    }
    const updateToDo = (id:number) => {

     //const todo = todos.find((todo)=>todo.id===id)
     //const anotherTodo = todos.find((todo)=>todo.id===id);
      const indexOfElement = todos.findIndex((todo)=>todo.id===id)

      //now that I have the todo need to set 
     if(indexOfElement){
      const todo = todos[indexOfElement];
        //updatedTodo.completed = !updatedTodo.completed; //is this a problem? I'm mutating the original as we can see in the next console.log
        const updatedTodo = {...todo, completed: !todo.completed}

       // console.log(updatedTodo)
        //console.log("anotherTodo", anotherTodo)
        
       const newTodos = [...todos.slice(0, indexOfElement), updatedTodo, ...todos.slice(indexOfElement+1)]
        //console.log("newTodos array:" ,newTodos)
        setTodos(newTodos)
      }


    }
  const links = [
    <Link to="/home" className="nav-link">Home</Link>,
    <Link to="/todos" className="nav-link">Todos</Link>,
    <Link to="/add-todo" className="nav-link">Add ToDo</Link>]
  const sidebarLinks = todos.map((todo)=> {
    let styling:object = {'borderRadius':'5px', 'padding': '3px', 'color': 'white', 'marginRight': '10px' }
    switch(todo.priority){
      case Priority.HIGH:

        styling = {...styling, backgroundColor: 'rgba(255, 65, 40, 0.75)'}
        break;
      case Priority.MEDIUM:

        styling = {...styling, backgroundColor: ' rgba(238, 255, 0, 0.75)'}
        break;
      case Priority.LOW:
        styling = {...styling, backgroundColor: 'rgba(136, 255, 24, 0.75)'}
        break;
    }
  return <div className="todo-list-item"><span style={styling} >{todo.priority}</span><Link className="text-white text-decoration-none" key={todo.id} to={`/todos/${todo.id}`}>{todo.text}</Link></div>
  
  

  })
    return (<div className="note-app">
    <Router>
      <Navbar links={links}/>
      <Sidebar links={sidebarLinks} />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/todos">
          <TodosPage todos={todos} deleteTodo={deleteToDo} updateTodo={updateToDo}/>
        </Route>
        <Route path="/todos/:todoId"  children={<SingleTodo todos={todos} deleteTodo={deleteToDo} updateTodo={updateToDo}/>}  />
        <Route path="/add-todo">
          <AddTodosPage addToDo={addToDo}  idNum={idNum} setIdNum={setIdNum}/>
        </Route>
      </Switch>
    </Router>

</div>)
}



export default TodoApp;