import { useState } from "react";
const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handletodoValue = (e) =>{
        setNewTask(e.target.value) 
    };
    const addTask = () => {
        const newList = [...todoList, newTask];
        setTodoList(newList)
    };
    return ( 
        <div className="container">
        <div className="addTask">
        <input onChange={handletodoValue}/> &nbsp;
        <button onClick={addTask}> Add Task</button>
        <div>
        {todoList.map((task) => {
            return <div>
            <h2>
            {task}
            </h2>
            </div>
        })}</div>
       
        </div>

        <div className="list"></div>
        </div>
     );
}
 
export default Todo;