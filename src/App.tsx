import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./components/Types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: '1',
    title: 'Comienza a hacer tu lista!',
    completed: false,
  }
]


const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

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


  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter:FilterValue): void => {
     console.log(filter)
    setFilterSelected(filter)
  }

    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount

    const filteredtodos = todos.filter (todo => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
      return todo
    })

    const handleAddTodo = ({title}: TodoTitle): void => {
      const newTodo = {
        title,
        id: crypto.randomUUID(),
        completed: false
      }

      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
    }

  return (
    <div className="todoapp">
      <Header
      onAddTodo={handleAddTodo}
      />
      <Todos
        onToggleCompleteTodo = {handlecompleted}
        onRemoveTodo={handleRemove}
        todos={filteredtodos} />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearcompleted={handleRemoveAllCompleted}
      handleFilterChange={handleFilterChange}
      />
    </div>

  )
};
export default App
