import { CreateTodo } from "./CreateTodo"
import { TodoTitle } from "./Types"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}


export const Header: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header className="header">
            <h1>To - Do 
            <img
            style={{width: '60px', height: 'auto'}}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            >
            
            </img>
            
            </h1>

            <CreateTodo saveTodo={onAddTodo} />
        </header>
    )
}