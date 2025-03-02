import DeleteIcon from '@mui/icons-material/Delete';
import classes from './TodoItem.module.css';

interface TodoItemProps {
    task: string;
    isCompleted: boolean;
    isUrgent: boolean;
    onToggleComplete: () => void;
    onToggleUrgent: () => void;
    onDeleteTask: () => void;
}

function TodoItem(props: TodoItemProps) {
    return (
        <div className={classes.card} style={{ backgroundColor: props.isCompleted ? "#c4a49f" : props.isUrgent ? "#f88786" : "#f0d1a8" }}>
            <div className={classes.taskName}>{props.task}</div>
            <div>
                <label>is Completed?</label>
                <input type="checkbox" onChange={props.onToggleComplete} checked={props.isCompleted} />
            </div>
            <div>
                <label>is Urgent?</label>
                <input type="checkbox" onChange={props.onToggleUrgent} checked={props.isUrgent} />
            </div>
            <DeleteIcon className={classes.btn} onClick={props.onDeleteTask} />
        </div>
    );
}

export default TodoItem;
