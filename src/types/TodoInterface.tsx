
import Priority from "./Priority"
type TodoInterface = {
    id: number,
    text: string,
    user: string
    datetime: Date,
    completed: boolean,
    priority: Priority
    created_at: Date
}

export default TodoInterface;