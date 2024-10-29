//for uploading images
import React,{useState} from "react";
import axios from 'axios';

function ImageUpload(){
    const [file,setFile]=useState(null);


    // useEffect(()=>{
    //     axios.get('/api/tasks')
    //     .then((response)=>setTasks(response.data))
    //     .catch((error)=>console.error('Error fetching tasks',error));

    // },[]);

    const handleUpload=()=>{
        const formData=new FormData();
        formData.append('image',file);
        axios.post('/api/upload',formData,{
            headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(()=>alert('Image uploaded succesfully!'))
        .catch((error)=>console.error('Error uploading image',error));
    };

    return (
        <div>
            <input
            type="file"
            onChange={(e)=>setFile(e.target.files[0])}/>
             <button onClick={handleUpload}>Upload Image</button>
        
        </div>
    );

}

export default ImageUpload;