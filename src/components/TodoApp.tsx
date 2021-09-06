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
const TodoApp = () => {
    const defaultTodos:TodoInterface[] = [];
    const [todos, setTodos]: [TodoInterface[], (todos:TodoInterface[] | ((todos:TodoInterface[])=>TodoInterface[]))=>void] = useState(defaultTodos)

   

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

     const todo = todos.find((todo)=>todo.id===id)
     //const anotherTodo = todos.find((todo)=>todo.id===id);

      //now that I have the todo need to set 
     if(todo){
        //updatedTodo.completed = !updatedTodo.completed; //is this a problem? I'm mutating the original as we can see in the next console.log
        const updatedTodo = {...todo, completed: !todo.completed}
        //console.log("anotherTodo", anotherTodo)

        const newTodos = todos.filter((todo)=>todo.id!==id)
        console.log(newTodos)
        newTodos.push(updatedTodo);
        //console.log(todos)
       setTodos(newTodos)
      }


    }
  const links = [
    <Link to="/home" className="nav-link">Home</Link>,
    <Link to="/todos" className="nav-link">Todos</Link>,
    <Link to="/add-todo" className="nav-link">Add ToDo</Link>]

    return (<div className="note-app">
    <Router>
      <Navbar links={links}/>

      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/todos">
          <TodosPage todos={todos} deleteTodo={deleteToDo} updateTodo={updateToDo}/>
        </Route>
        <Route path="/add-todo">
          <AddTodosPage addToDo={addToDo} />
        </Route>
      </Switch>
    </Router>

</div>)
}



export default TodoApp;