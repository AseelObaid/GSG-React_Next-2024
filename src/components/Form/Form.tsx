import { useFormik } from "formik";
import { ValidationSchema } from './Validation_Form'
import { INITAILVALUES } from './Constant'
import classes from './Form.module.css'
import Alert from '@mui/material/Alert';
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

interface Iprops {
    handleAddTask: (value: string) => void
}
function Form(props: Iprops) {
    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: INITAILVALUES,
        onSubmit: (values) => {
            props.handleAddTask(values.taskName);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 1000);
            formik.resetForm()
        }, validationSchema: ValidationSchema,
    });

    return (
        <>
            {success && (
                <Alert icon={<CheckIcon fontSize="small" />} severity="success">
                    Task added successfully!
                </Alert>
            )}
            <form onSubmit={formik.handleSubmit} className={classes.contanier}>


                <input type="text" name="taskName" value={formik.values.taskName} placeholder="Add New Task..." onChange={formik.handleChange} className={classes.inputTask} />

                {
                    formik.errors.taskName && formik.touched.taskName && (
                        <div style={{ color: 'red' }}>{formik.errors.taskName}</div>
                    )
                }
                <button className={classes.addtaskbtn} type="submit" >+</button>

            </form>
        </>


    )
}
export default Form;
