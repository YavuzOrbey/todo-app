import Todo from "./Todo";
import TodoInterface from '../types/TodoInterface';
import { useParams } from "react-router";
const SingleTodo = ({todos, deleteTodo, updateTodo}:{todos:TodoInterface[], deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) => {
    let { todoId } = useParams<{todoId:string}>();
    console.log(todos)
    console.log(todoId)
    const todo = todos.filter(todo=>todo.id=== parseInt(todoId,10))[0]
    return <div className='container'><div className="row"><Todo todo={todo}  deleteTodo={deleteTodo} updateTodo={()=>updateTodo} /></div></div>
}

export default SingleTodo;