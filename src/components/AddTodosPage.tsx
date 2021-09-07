import TodoInterface from '../types/TodoInterface';
import Priority from '../types/Priority';
import {useRef, useState} from 'react'
const AddTodosPage = ({addToDo, idNum, setIdNum}:{addToDo:(todo:TodoInterface)=>void, idNum:number, setIdNum: (idNum:number)=>void}) => {
    const form = {
        todoTextInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        userInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        dateTimeInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        priorityInput: useRef() as  React.MutableRefObject<HTMLSelectElement>
    }



    const createTodo = (event:any):void => {
        setIdNum(idNum+1)
        const newTodo:TodoInterface = {
            id: idNum,
            text: form.todoTextInput.current.value,
            user: "guest",
            datetime: new Date(form.dateTimeInput.current.value),
            completed: false,
            priority: Priority[form.priorityInput.current.value as keyof typeof Priority],
            created_at: new Date()
        }

        addToDo(newTodo);
        event.preventDefault();
    }

    return (<div className="container"><div className="row"><div className="col-md-6"><form action='#' onSubmit={createTodo}>
        <h3>Add New Todo</h3>
        <div className="mb-3">
        <label>Priority</label>
        <select  className="form-control" name="priority" ref={form.priorityInput}>
            <option value={Priority.HIGH}>High</option>
            <option value={Priority.MEDIUM}>Medium</option>
            <option value={Priority.LOW}>Low</option>
        </select>
        </div>
        <div className="mb-3">
        <label>Todo Text</label>
        <input type="text" className="form-control" placeholder="Todo text"  ref={form.todoTextInput}/>
        </div>
        <div className="mb-3">
        <label>Time</label>
        <input type="datetime-local" className="form-control" placeholder="Date and time" ref={form.dateTimeInput}/>
        </div>
        <button className="btn btn-outline-primary">Add</button>
        </form></div></div></div>)
}
export default AddTodosPage;