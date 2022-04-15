
import TaskItem from './TaskItem'

function TaskList({tasks, onDelete, toggleDone}) {
    
    return (
        <div >
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone}/>
        ))}
        </div>
    )
}

export default TaskList