
import {useEffect, useState} from 'react'
import './App.css';
import axios from "axios";
import Item from './component/item';


function App(){
const[text,setText] = useState("")
const[todo , setTodo] = useState([]);
const[updateTodoList , setUpdateTodoList] = useState("") ; 
const [editID, setEditID] = useState("");

useEffect(()=>{
  axios.get('http://localhost:5000/todo')
  .then((res)=> setTodo(res.data))
  .catch((err)=>console.log(err))

},[])

const deleteTodo  = (_id) => {
  axios.delete(`http://localhost:5000/todo/${_id}`)
  .then((res)=> console.log(res.data))
  .catch((err)=>console.log(err))
}

const updateTodo = (_id , list) => {
  console.log(_id , list)
  setUpdateTodoList(_id);
  setEditID(_id);
  setText(list);
}

const addUpdate = () =>{
      if(updateTodoList === ""){
        axios.put(`http://localhost:5000/todo/${editID}` ,text )
        .then((res)=> {
          setText("")
          console.log(res)})
        .catch((err)=>console.log(err))
      }
      else{
        axios.post(`http://localhost:5000/todo` , {todo} )
        .then((res)=> {
          setText("")
          // setUpdateTodoList("")
          console.log(res)})
        .catch((err)=>console.log(err))
      } 
}

  return(
    <div className='App'>
      <div className='container'>
        <h1> ToDo App Based On Mern </h1>
       <div className='top'>
       <input
        type="text"
        placeholder="Add your to-do list"
        value={text}
        onChange={(e)=> setText(e.target.value)}/>

        <div className='add' onClick={addUpdate}>
          {updateTodoList ? "Update" : "Add"}
          </div>
       </div>
       {/* <div className='list'>
       {todo.map((item , i) =>{
        return    <Item key={item._id} text={item.text}
        remove={()=>deleteTodo(item._id)}
        update={()=>updateTodo(item._id , item.text)} />
       })
       } */}

<div className='list'>
       {todo.map((item , i) =>{
        return    <Item key={i}
         text={item.list}
         remove={()=>deleteTodo(item._id)}
         update={()=>updateTodo(item._id , item.list)}  />
       })
       }
       </div>
      </div>
    </div>
  )
}
export default App;