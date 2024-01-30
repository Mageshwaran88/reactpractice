import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";
import axios from "axios";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToDoList = () => {
  const [inputdata, setinputdata] = useState("");
  const [myarray, setmyarray] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };
  const getdata = async () => {
    const response = await axios.get("http://localhost:3000/todoList");
    setmyarray(response.data);
  };
  const handleadd = async () => {
    const response = await axios.post("http://localhost:3000/todoList", {
      id: uuidv4(),
      task: inputdata,
    });
  };
  getdata();
  const handleupdate = async(index)=>{
    const edittext =prompt("edit your task",myarray[index].task)
    await axios.put(`http://localhost:3000/todoList/${myarray[index].id}`,{id:myarray[index].id,task:edittext})
  }
  getdata();
  const handledelete = async(id)=>{
    const response = await axios.delete(`http://localhost:3000/todoList/${id}`)
  }
  getdata()

  return (
    <div className='todomain'>
    <div className='todoform'>
        <input onChange={handleinput} type="text" className='todo-input' placeholder='enter your task here...' />
        <button onClick={handleadd} type='submit'className='todo-btn'>Add</button>
        <div>
          {myarray.map((arraydata,i)=>(
            <div className='addtask' key={i}>
              <p className='mytask'>{arraydata.task}</p>
              <div>
                <FontAwesomeIcon onClick={()=>handleupdate(i)} className='editicon' icon={faPenToSquare}/>
                <FontAwesomeIcon onClick={()=>handledelete(arraydata.id)} className='deleteicon' icon={faTrash}/>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};
