import classes from  './style.module.css'
interface Iprops{
    result:string
}
const Result=(props:Iprops)=>{
    return(
        <>
        <input type="text" className={classes.input} readOnly value={props.result}/>
        </>
    )
}
export default Result