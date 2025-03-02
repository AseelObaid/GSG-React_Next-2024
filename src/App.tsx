import { useState } from "react";
import Form from "./components/Form";
import Counter from "./components/Counter";
import TodoList from "./components/ToDoList";
import  classes from'./App.module.css';

function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);
    const [isUrgent, setIsUrgent] = useState<boolean[]>([]);
    const [countCompletedTasks, setCountCompletedTasks] = useState<number>(0);
    const [countUrgentTasks, setCountUrgentTasks] = useState<number>(0);

    function handleAddTask(taskName: string) {
        setTasks([...tasks, taskName]);
        setCheckedTasks([...checkedTasks, false]);
        setIsUrgent([...isUrgent, false]);
    }

    function handleToggleComplete(index: number) {
       
        setCheckedTasks(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
        setCountCompletedTasks(prev => checkedTasks[index] ? prev - 1 : prev + 1);
    }

    function handleToggleUrgent(index: number) {
        setIsUrgent(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
        setCountUrgentTasks(prev => isUrgent[index] ? prev - 1 : prev + 1);
    }

    function handleDeleteTask(index: number) {
        setTasks(tasks.filter((_, i) => i !== index));
        setCheckedTasks(checkedTasks.filter((_, i) => i !== index));
        setIsUrgent(isUrgent.filter((_, i) => i !== index));

        if (checkedTasks[index]) setCountCompletedTasks(prev => prev - 1);
        if (isUrgent[index]) setCountUrgentTasks(prev => prev - 1);
    }

    return (
        <div className={classes.appContainer}>
           <div className={classes.part1}>
          <h1 className={classes.today}> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long" })}</h1>
          <Form handleAddTask={handleAddTask} />

          </div>
          
            <div className={classes.part2}>
            <Counter 
                totalTasks={tasks.length} 
                completedTasks={countCompletedTasks} 
                urgentTasks={countUrgentTasks} 
            />
            <TodoList 
                tasks={tasks} 
                checkedTasks={checkedTasks} 
                isUrgent={isUrgent} 
                onToggleComplete={handleToggleComplete} 
                onToggleUrgent={handleToggleUrgent} 
                onDeleteTask={handleDeleteTask} 
            />
            </div>
           
        </div>
    );
}

export default App;

