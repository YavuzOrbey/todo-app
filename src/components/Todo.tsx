import TodoInterface from '../types/TodoInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
const Todo = ({todo, deleteTodo, updateTodo}: {todo:TodoInterface, deleteTodo: (id:number)=>void, updateTodo: (id:number)=>void}) => {
    const {id, text, datetime, user, completed} = todo;

    const[isCompleted, setisCompleted] = useState(completed)
    return (<div className="card" style={{width: '18rem'}}>
        <div className="card-body">
    <h5 className="card-title">{text}</h5>
    <h6 className="card-subtitle mb-2 text-muted"><p>{`${datetime.getMonth()}/${datetime.getDate()}/${datetime.getFullYear()}`}</p>
    <p>{`${datetime.getHours()}:${datetime.getMinutes()}`}</p></h6>
    <p className="card-text">{user}</p>
    <p className="card-link"><label>Completed?</label><input type='checkbox'  checked={completed} onChange={()=>{ setisCompleted(!isCompleted); updateTodo(id)}} /></p>
    <p className="card-link"><button onClick={() => deleteTodo(id) }><FontAwesomeIcon icon={faTrash} /></button></p>
  </div>
</div>)
}



export default Todo;
/* 
return {/* <div><h3>{`${datetime.getMonth()}/${datetime.getDate()}/${datetime.getFullYear()}`}</h3>
<h4>{`${datetime.getHours()}:${datetime.getMinutes()}`}</h4>
<p>{text}</p>
<p>-{user}</p>
<label>Completed?</label>
<input type='checkbox' onChange={()=>console.log('clicked')} />
<button onClick={() => deleteTodo(id) }><FontAwesomeIcon icon={faTrash} /></button>
</div> */