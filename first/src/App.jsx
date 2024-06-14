import { useState } from 'react'
import MyInput from './components/Input'
import ListItem from './components/ListItem';

import './App.css'

function App() {
  // let [value,setvalue]=useState("hello")
  // const food=["pizza","burger","softy","roti","dal"]
  const[food,setFood]=useState([]);

  const onKeyChange=(event)=>{
    if(event.key==="Enter")
      {
        const newValue=event.target.value;
        const newArr=[...food,newValue];
        setFood(newArr);

      }
 
  }



  return (
    <>
      
     <MyInput keyhandler={onKeyChange}></MyInput> 
     <ListItem  foodArr={food}></ListItem>
    </>
  )
}

export default App
