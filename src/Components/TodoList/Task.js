import './task.css';
const Task = ({ taskName, id, deleteTask, completeTask, completed}) => {
    return <div className="task" style={{backgroundColor: completed ? "lightBlue" : "", border: "1px solid black"}}>
            <h2>
            {taskName}
            </h2> &nbsp; &nbsp;
            <button onClick={() => deleteTask(id)}>Remove</button> &nbsp;
            <button onClick={() => completeTask(id)}>Complete</button>
            </div>
}
export default Task;