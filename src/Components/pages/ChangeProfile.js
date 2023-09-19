import { useState, useContext } from "react";
import { AppContext } from "../../App";

const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
   
    return ( 
        <div>
       
    <input onChange={(event)=> setNewUsername(event.target.value)}/> &nbsp;    
       <button onClick={()=> setUsername(newUsername)}>Change username</button>
     
        </div>
     );
}
 
export default ChangeProfile;