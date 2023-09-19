import { useState } from "react";
import Axios from "axios";
const Excuses = () => {
    const [excuse, setExcuse] = useState("");

    const fetchExcuses = (excuses) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuses}`)
        .then((res)=>{
           setExcuse(res.data[0].excuse);
        })
        .catch(()=>{
            console.log("Error fetching data");
        })

    }
    return ( 
        <div>
        <h2>Generate an excuse</h2>
        <button onClick={()=> fetchExcuses("party")}>Party</button> <br/>
        <button onClick={()=> fetchExcuses("office")}>Office</button> <br/>
        <button onClick={()=> fetchExcuses("family")}>Family</button> <br/>
        <p>{excuse}</p>
        </div>
     );
}
 
export default Excuses;