
const Listitem=({foodArr})=>{
    return(
    <>
<div>{foodArr.map((items)=>(
    <li>{items}</li>

))}
</div>
    </>)
}
export default Listitem;