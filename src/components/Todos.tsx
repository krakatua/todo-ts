import { Todo } from "./Todo"
import {type Todo as TodoType, type TodoId, type ListOfTodos } from "./Types"

interface Props {
    todos: ListOfTodos
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}: TodoId) => void
}


export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {
    return (
       <ul className="todo-list">
        {
            todos.map(todo => (
                <li className={`${todo.completed ? 'completed' : ''}`} key={todo.id}>
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggleCompleteTodo={onToggleCompleteTodo}
                    onRemoveTodo={onRemoveTodo}/>
                </li>
            ))
        }
       </ul> 
    )
}


