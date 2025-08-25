import { useState } from "react";
import Mytasks from "../components/Mytasks"
import { IoAddCircle } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { auth } from "../firebase";
import { useLocation } from "react-router-dom";
const Dashboard=()=>{

 const location = useLocation();
  const userName = location.state?.name || "User";
  
    const [showModal,setshowModal]=useState(false);
    const [tasks,setTasks]=useState([]);
        const [title,setTitle]=useState("");
    const [status,setStatus]=useState("pending");
    const [date,setDate]=useState("");
    // stats data
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const pendingTasks = tasks.filter(task => task.status === "pending").length;
    // add func.
      const addTask = () => {
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title, status, date };
    setTasks([...tasks, newTask]);
    setStatus("pending");
    setDate("");
    setTitle("");
    setshowModal(false);
  };
  // remove func.
  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

    return <>
          <main className="min-h-screen w-full bg-orange-200">
           <div className="flex">
            <div className="w-full md:w-2/12 min-h-screen bg-gray-800">
            <ul className="flex flex-col text-white gap-6 items-center justify-center p-8">
                <li className="font-semibold text-xl">Home</li>
                <li className="font-semibold text-xl">Tasks</li>
                <li className="font-semibold text-xl">Logout</li>
            </ul>
            </div>
            <div className="w-10/12 p-6">
            <h1 className="mb-8 font-bold text-xl">Hello {userName}, Welcome</h1>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
   <div className="flex flex-col p-4 bg-gray-600 rounded items-center text-white shadow-md">
      <h4>Total Tasks</h4>
      <p className="text-2xl font-bold">{totalTasks}</p>
   </div>
   <div className="flex flex-col p-4 bg-gray-600 rounded items-center text-white shadow-md">
      <h4>Completed</h4>
      <p className="text-2xl font-bold">{completedTasks}</p>
   </div>
   <div className="flex flex-col p-4 bg-gray-600 rounded items-center text-white shadow-md">
      <h4>Pending</h4>
      <p className="text-2xl font-bold">{pendingTasks}</p>
   </div>
</div>
    <div className="mt-6"></div>
    <div className="flex justify-between pr-6 items-center">
      <h2 className="font-bold text-xl">My Tasks</h2>
      <button onClick={()=>setshowModal(true)} className="bg-green-500 text-white px-3 py-1 rounded-xl flex items-center gap-2 cursor-pointer"><IoAddCircle />Add</button>
      </div>
       <Mytasks tasks={tasks} remove={removeTask}></Mytasks>
            </div>
       {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
           <div className="bg-white rounded-lg p-6 w-[350px] shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl mb-4">Add Task</h2>
              <button onClick={()=>setshowModal(false)}><ImCross/></button> 
               </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="title">Title:</label>
            <input type="text" className="w-full border rounded p-2 mb-3"
            value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
              <div className="flex gap-4">
             <label htmlFor="title">Status:</label>
           <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="pending">pending</option>
              <option value="completed">completed</option>
           </select>
              </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="date">Due Date:</label>
              <input type="text" placeholder="date" className="w-full border rounded p-2 mb-3" value={date} onChange={(e)=>setDate(e.target.value)} />
              </div>
              <button onClick={addTask} className="bg-green-400 text-white px-3 py-1 rounded-lg">Add</button>
            </div>
        </div>
       )}
           </div>
          </main>
    
    </>
}

export default Dashboard