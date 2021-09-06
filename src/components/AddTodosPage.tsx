import TodoInterface from '../types/TodoInterface';
import {useRef, useState} from 'react'
const AddTodosPage = ({addToDo}:{addToDo:(todo:TodoInterface)=>void}) => {
    const form = {
        todoTextInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        userInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        dateTimeInput: useRef() as React.MutableRefObject<HTMLInputElement>,
    }

    const [idNum, setIdNum] = useState(0)

    const createTodo = (event:any):void => {
        setIdNum(idNum+1)
        const newTodo:TodoInterface = {
            id: idNum,
            text: form.todoTextInput.current.value,
            user: form.userInput.current.value,
            datetime: new Date(form.dateTimeInput.current.value),
            completed: false
        }

        addToDo(newTodo);
        event.preventDefault();
    }

    return (<div className="container"><form action='#' onSubmit={createTodo}>
        <p>Add New Todo</p>
        <div className="mb-3">
        <label>Todo Text</label>
        <input type="text" className="form-control" placeholder="Todo text"  ref={form.todoTextInput}/>
        </div>
        <div className="mb-3">
        <label>User</label>
        <input type="text"  className="form-control" placeholder="User" ref={form.userInput}/>
        </div>
        <div className="mb-3">
        <label>Time</label>
        <input type="datetime-local" className="form-control" placeholder="Date and time" ref={form.dateTimeInput}/>
        </div>
        <button>Add</button>
        </form></div>)
}
export default AddTodosPage;