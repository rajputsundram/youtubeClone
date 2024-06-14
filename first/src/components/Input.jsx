import style from "./Input.module.css"
const MyInput=({keyhandler})=>
    {
        return(
        <>

<input type="text" className={style.myInput} onKeyDown={keyhandler} />
        </>)
    }
    export default MyInput;