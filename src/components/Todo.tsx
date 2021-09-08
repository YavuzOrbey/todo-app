import TodoInterface from '../types/TodoInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
import '../style/Todo.css'


const Todo = ({todo, deleteTodo, updateTodo}: {todo:TodoInterface, deleteTodo: (id:number)=>void, updateTodo: ()=>void}) => {
/*   useEffect(()=>console.log('initial render'),[])
  useEffect(()=>console.log('rerendered')) */
    const {id, text, datetime, user, completed, priority} = todo;

    const[isCompleted, setisCompleted] = useState(completed)


    useEffect(()=> {
    console.log("This callback will run on every rerender")
    window.addEventListener('click', ()=>{
        console.log('clicked')
      })
    
  })
    useEffect(()=>{
      //console.log("component mounted")
    }, [])

    useEffect(()=> {
      console.log("isCompleted changed")
      return () => {
        console.log(new Date().getMilliseconds(), 'cleanup function')
      }
    }, [isCompleted])
    return (
    <div className={priority.toString().toLowerCase() + '-priority card todo m-3'} style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
        <h6 className="card-subtitle mb-2 text-muted"><p>{`${datetime.getMonth()}/${datetime.getDate()}/${datetime.getFullYear()}`}</p>
    <p>{`${datetime.getHours()}:${datetime.getMinutes()}`}</p></h6>
    <p className="card-text">{user}</p>
    <p className="card-link"><label>Completed?</label><input type='checkbox'  checked={isCompleted} 
    onChange={()=>{ setisCompleted(!isCompleted); updateTodo() }} /></p>
    <p className="card-link"><button onClick={() => deleteTodo(id) }><FontAwesomeIcon icon={faTrash} /></button></p>
  </div>
</div>)
}



export default Todo;
//TODO if you click completed, then filter completed and click completed again the app still thinks its completed. WHy?