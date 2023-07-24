import { Filters } from "./Filters"
import { type FilterValue} from "./Types"


interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
    onClearcompleted(): void
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearcompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
            filterSelected={filterSelected}
            onFilterChange={()=>{}}
            />

            {
                completedCount > 0 && (
                    <button className="clear-completed"
                    onClick={onClearcompleted}>
                        Borrar completadas
                    </button>
                )
            }

        </footer>
    )
    
}