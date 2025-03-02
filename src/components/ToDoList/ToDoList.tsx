
import TodoItem from '../TodoItem';
import classes from './TodoList.module.css';

interface TodoListProps {
    tasks: string[];
    checkedTasks: boolean[];
    isUrgent: boolean[];
    onToggleComplete: (index: number) => void;
    onToggleUrgent: (index: number) => void;
    onDeleteTask: (index: number) => void;
}

function TodoList(props: TodoListProps) {
    return (
        <div className={classes.grid}>
            {props.tasks.map((task, index) => (
                <TodoItem 
                    key={index} 
                    task={task} 
                    isCompleted={props.checkedTasks[index]} 
                    isUrgent={props.isUrgent[index]} 
                    onToggleComplete={() => props.onToggleComplete(index)} 
                    onToggleUrgent={() => props.onToggleUrgent(index)} 
                    onDeleteTask={() => props.onDeleteTask(index)} 
                />
            ))}
        </div>
    );
}

export default TodoList;
