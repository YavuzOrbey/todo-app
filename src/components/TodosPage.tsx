
import TodoInterface from '../types/TodoInterface'
import Todo from './Todo';
import {useRef, useEffect, useState} from 'react'
const TodosPage = ({todos, deleteTodo, updateTodo}:{todos:TodoInterface[], deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) =>{
    const completed = useRef() as React.MutableRefObject<HTMLInputElement>;
    const byDate = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [showCompleted, setShowCompleted] = useState(false);
    const [sortedByDate, setSortedByDate] = useState(false);
    /* const [filteredTodos, setFilteredTodos] = useState(todos) //this is conflicting with the prop change 
    console.log("todos from prop: ",todos)
    console.log("todos from state: " ,filteredTodos) */
    const  enableSortByCompleted = () => {
        setShowCompleted(completed.current.checked);
    }
    const enableSortByDate = () => {
        setSortedByDate(byDate.current.checked);
    }

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-2"><label>Filter</label>
            <label>Completed</label>
            <input type="checkbox" ref={completed} onChange={enableSortByCompleted} /></div>
            <label>Date</label>
            <input type="checkbox" ref={byDate} onChange={enableSortByDate} />
        </div>
        <div className="row">
            { sorted.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)}/>) }
            {!showCompleted && todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)}/>)}
            {showCompleted &&  todos.filter((todo)=>todo.completed).map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)}/>) }
            {sortedByDate &&  [...todos].sort((todo1,todo2)=> {
            if(todo1.datetime===todo2.datetime)
                return 0;
            else if(todo1.datetime>todo2.datetime)
                return 1;
            else
                return -1;

            }).map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)}/>)}
        </div>
     </div>)
} 

export default TodosPage;