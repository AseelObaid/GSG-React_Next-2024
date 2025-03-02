import classes from './Counter.module.css';

interface CounterProps {
    totalTasks: number;
    completedTasks: number;
    urgentTasks: number;
}

function Counter(props: CounterProps) {
    return (
        <div className={classes.counter}>
            <div className={classes.countAllTask}>
                <h4>ALL TASKS</h4>
                {props.totalTasks}
            </div>
            <div className={classes.countCompletesTask}>
                <h4>COMPLETED TASKS</h4>
                {props.completedTasks}
            </div>
            <div className={classes.countUrgentTask}>
                <h4>URGENT TASKS</h4>
                {props.urgentTasks}
            </div>
        </div>
    );
}

export default Counter;
