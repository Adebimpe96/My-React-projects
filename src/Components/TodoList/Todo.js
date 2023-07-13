import { useState } from "react";
import Task from "./Task";
import './todo.css';
const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handletodoValue = (e) =>{
        setNewTask(e.target.value) 
    };
    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task])
    };
    const deleteTask = (id) => {
        const newList = todoList.filter((task) => task.id !== id);
        setTodoList(newList)
    };
    const completedTask = (id) => {
const checkCompleted = (todoList.map((task) => {
    if (task.id === id) {
        return {...task, completed:true}
    }else 
    {
        return task;
    }  
}))
setTodoList(checkCompleted)
    }
    return ( 
        <div className="container">
        <div className="addTask">
        <input onChange={handletodoValue}/> &nbsp;
        <button onClick={addTask}> Add Task</button>
        </div>

        <div className="list">
        {todoList.map((task) => {
            return(
                <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed ={task.completed} completeTask={completedTask}/>
            )   
        })}
        </div>
        </div>
     );
}
 
export default Todo;