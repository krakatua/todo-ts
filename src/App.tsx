import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId, type Todo as TodoType } from "./components/Types";

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

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handlecompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }


  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo = {handlecompleted}
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>

  )
};
export default App
