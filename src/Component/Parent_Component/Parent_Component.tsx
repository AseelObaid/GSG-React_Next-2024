import { useState } from "react";
import Form from "../Form_Component/Form";
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './Parent.module.css'

function Parent() {
    const [parent, setParent] = useState<string[]>([]);
    const [countAllTask, setCountAllTask] = useState<number>(0);
    const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);
    const [countCompletedTasks, setCountCompletedTasks] = useState<number>(0);

    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long" });

    function handleAllTasks(values: string) {
        setParent([...parent, values]);
        setCountAllTask(prev => prev + 1);
        setCheckedTasks(prev => [...prev, false]);
    }

    function handleChange(index: number) {
        const isChecked = !checkedTasks[index];

        setCheckedTasks(prev => {
            const updatedCheckedTasks = [...prev];
            updatedCheckedTasks[index] = isChecked;
            return updatedCheckedTasks;
        });


        if (isChecked) {
            setCountCompletedTasks(prev => prev + 1);
        } else {
            setCountCompletedTasks(prev => prev - 1);
        }
    }

    function handleDeleted(index: number) {
        const isTaskCompleted = checkedTasks[index];
        setParent(prev => prev.filter((_, i) => i !== index));
        setCheckedTasks(prev => prev.filter((_, i) => i !== index));

        if (isTaskCompleted) {
            setCountCompletedTasks(prev => prev - 1);
        }
        setCountAllTask(prev => prev - 1);
    }

    return (
        <div className={classes.main}>
            <div className={classes.part1}>
                <h1 className={classes.today}>{today}</h1>
                <Form handleAllTasks={handleAllTasks} />
            </div>
            <div className={classes.parent}>
                <div className={classes.AllCount}>
                    <div className={classes.countAllTask}>
                        <h4>ALL TASKS</h4>
                        {countAllTask}
                    </div>
                    <div className={classes.countCompletesTask}>
                        <h4>COMPLETED TASKS</h4>
                        {countCompletedTasks}
                    </div>
                </div>

                <div className={classes.grid}>
                    {parent.map((ele, index) => (
                        <div className={classes.card} style={{ backgroundColor: checkedTasks[index] ? "#c4a49f " : "#f0d1a8" }} key={index}>
                            <div >

                                <span
                                    className={classes.taskName}

                                >
                                    {ele}
                                </span>
                                <input
                                    type="checkbox"
                                    onChange={() => handleChange(index)}
                                    checked={checkedTasks[index] || false}
                                />
                            </div>


                            <DeleteIcon className={classes.btn} onClick={() => handleDeleted(index)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Parent;
