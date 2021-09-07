
import TodoInterface from '../types/TodoInterface'
import Todo from './Todo';
import {useRef, useEffect, useState} from 'react'
const TodosPage = ({todos, deleteTodo, updateTodo}:{todos:TodoInterface[], deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) =>{
    let completed = useRef() as React.MutableRefObject<HTMLInputElement>;
    let completionFilter = false;


    const [filteredTodos, setFilteredTodos] = useState(todos)
    const doSomething = () => {
        completionFilter = completed.current.checked;
        const newTodos = completionFilter ?  todos.filter((todo)=>todo.completed===true): todos;

        setFilteredTodos(newTodos)
    }


    return (
    <div className="container">
        <div className="row">
            <div className="col-md-2"><label>Filter Completed</label>
            <input type="checkbox" ref={completed} onChange={()=>doSomething()} /></div>
        </div>
        <div className="row">
            {filteredTodos.map((todo,index) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(index)}/>)}
        </div>
     </div>)
} 


export default TodosPage;