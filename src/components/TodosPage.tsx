
import TodoInterface from '../types/TodoInterface'
import Todo from './Todo';
import {useRef, useState} from 'react'
import { access } from 'fs';
const TodosPage = ({todos, deleteTodo, updateTodo}:{todos:TodoInterface[], deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) =>{
    const completed = useRef() as React.MutableRefObject<HTMLInputElement>;
    const byDate = useRef() as React.MutableRefObject<HTMLInputElement>;
    const byName = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [sortedByCompleted, setSortedByCompleted] = useState(false);
    const [sortedByDate, setSortedByDate] = useState(false);
    const [sortedByName, setSortedByName] = useState(false);
    /* const [filteredTodos, setFilteredTodos] = useState(todos) //this is conflicting with the prop change 
    console.log("todos from prop: ",todos)
    console.log("todos from state: " ,filteredTodos) */
    const enableSortByCompleted = () => {
        setSortedByCompleted(completed.current.checked);
    }
    const enableSortByDate = () => {
        setSortedByDate(byDate.current.checked);
    }

    const enableSortByName = () => {
        setSortedByName(byName.current.checked)
    }

    const sortByCompleted = (todos:TodoInterface[]):TodoInterface[] => {
        return sortedByCompleted ? todos.filter((todo)=>todo.completed): todos;
    }

    const sortByName = (todos:TodoInterface[]):TodoInterface[] => {
        return sortedByName ? [...todos].sort((todo1,todo2)=> {
            if(todo1.text===todo2.text)
                return 0;
            else if(todo1.text >todo2.text)
                return 1;
            else
                return -1;
            }) : todos;
    }

    const sortByDate = (todos:TodoInterface[]):TodoInterface[] => {
        return sortedByDate ? [...todos].sort((todo1,todo2)=> {
            if(todo1.datetime===todo2.datetime)
                return 0;
            else if(todo1.datetime>todo2.datetime)
                return 1;
            else
                return -1;
            }) : todos;
    }

   /*  type AccumulatorObject = { [key: string]: string | null; }
    let mything = ["stuff", "things"].reduce((acc,item)=> {
        const obj:AccumulatorObject = {...acc}
        obj[item] = null;
        return obj;
    }, {} as AccumulatorObject)
    console.log(mything) */







    const pipe = (...fns:any) => (x:any) => fns.reduce((y:any, f:any) => f(y), x); 

    //another way to write the above...

    /*
        function (...fns){
            return function(x){
                return fns.reduce(function(y,f){
                    return f(y)
                }, x)
            }
        }
    */
    const sorted = pipe(sortByDate, sortByName, sortByCompleted)(todos) //sortByDate(sortByName(sortByCompleted(todos)))
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-2"><label>Filter</label><label>Completed</label>
            <input type="checkbox" ref={completed} onChange={enableSortByCompleted} /></div>
            </div>
            <div className="col-md-2"><label>Sort</label>
            <label>Date</label>
            <input type="checkbox" ref={byDate} onChange={enableSortByDate} />
            <label>Name</label>
            <input type="checkbox" ref={byName} onChange={enableSortByName} />
        </div>
        <div className="row" id="the-todos">
            { sorted.map((todo: TodoInterface) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)}/>) }
        </div>
     </div>)
} 

export default TodosPage;

//TODO first element doesn't hold completed state after filtering by completed