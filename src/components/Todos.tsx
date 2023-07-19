import { Todo } from "./Todo"
import { type ListOfTodos } from "./Types"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
}


export const Todos: React.FC<Props> = ({todos, onRemoveTodo}) => {
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
                    onRemoveTodo={id => onRemoveTodo(id)}/>
                </li>
            ))
        }
       </ul> 
    )
}


