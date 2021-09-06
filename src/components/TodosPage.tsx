
import TodoInterface from '../types/TodoInterface'
import Todo from './Todo';
const TodosPage = ({todos, deleteTodo, updateTodo}:{todos:TodoInterface[], deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) =>{

    console.log(todos)
 return <div className="container">
 {todos.map((todo)=><Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>)}
 </div>
} 


export default TodosPage;