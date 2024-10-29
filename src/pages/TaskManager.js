import React,{useState,useEffect} from "react";
import axios from 'axios';

function TaskManager(){
    const [tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState('');

    useEffect(()=>{
        axios.get('/api/tasks')
        .then((response)=>setTasks(response.data))
        .catch((error)=>console.error('Error fetching tasks',error));

    },[]);

    const addTask=()=>{
        axios.post('./api/tasks',{text:newTask})
        .then((response)=>{
            setTasks([...tasks,response.data]);
            setNewTask('');
        })
        .catch((error)=>console.error('Error adding task',error));
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input
            type="text"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            placeholder="New task ..."
            
         />
         <button onClick={addtoTask}>Add Task</button>

         <ul>
            {tasks.map((task)=>(
                <li key={task.id}>{task.text}</li>

            ))}
         </ul>
        </div>
    );

}

export default TaskManager;