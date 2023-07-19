import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: '1',
    title: 'Ver cocote e perro',
    completed: true,
  },
  {
    id: '2',
    title: 'HolaMundo',
    completed: false,
  },
  {
    id: '3',
    title: 'React con typescript',
    completed: false,
  },
]


const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }


  return (
    <div className="todoapp">
      <Todos 
      onRemoveTodo={handleRemove}
      todos={todos}/>
    </div>
    
  )
};
export default App
