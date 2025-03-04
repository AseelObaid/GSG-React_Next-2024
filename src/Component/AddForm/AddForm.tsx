import { useState } from 'react'
import classes from './AddForm.module.css';
import { Is } from '../../App'
import CoursesListForm from '../CoursesListForm/CoursesListForm'
import useForm from '../../hooks/Form.hook';

interface Istudent {
    AddNewStudent: (v: Is) => void
}

interface Iinput {
    field: string;
    value: any
}

function AddForm(props: Istudent) {
    const initial = { name: '', age: 0, isG: false, list: [], absents: 0, id: '' }
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<Iinput>({ field: "", value: "" });
    const { student, handleSubmit, handleClear } = useForm(input, initial, props.AddNewStudent)

    function handleListCourse(value: any) {
        setInput({ field: "list", value })
    }

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <span>close</span> : <span>open</span>
                }Add Form  </button>

            <div className={isOpen ? classes.open : classes.close} >


                <div>
                    <label htmlFor='name'>Student Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={student.name}
                        onChange={(e) => {
                            const newValue = e.currentTarget.value;
                            setInput({ field: 'name', value: newValue });

                        }}
                    />
                </div>
                <div>
                    <label htmlFor='age'>Student Age:</label>
                    <input value={student.age} type='number' id='age' max={40} onChange={(e) => setInput({ field: 'age', value: e.target.value })} />
                </div>
                <div>
                    <label htmlFor='isG'>is Student Greduted:</label>
                    <input checked={student.isG} type='checkbox' id='isG' onChange={(e) => setInput({ field: 'isG', value: e.target.checked })} />
                </div>
                <CoursesListForm list={student.list} handleListCourse={handleListCourse} clssNme={classes.enum} />
                <div className='actions'>
                    <button onClick={handleSubmit} >Submit</button>
                    <button onClick={handleClear}>Clear</button>
                </div>


            </div>
        </>
    )
}
export default AddForm