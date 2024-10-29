import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TaskManager from "./pages/TaskManager";
import ImageUpload from "./components/imageUpload";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/tasks" element={<TaskManager/>}/>
      <Route path="/upload" element={<ImageUpload/>}/>
    </Routes>
   </Router>
  );
}

export default App;
