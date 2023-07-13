import { useState } from "react";

const ColorChange = () => {

    const [textColor, setTextColor] = useState("")


    return ( 
        <div>
        <button onClick={()=> setTextColor(textColor=== "black" ? "red" : "black")}>Change Color</button>
        <h1 style={{color: textColor}}>Hello I am here with you.</h1> 
         
        </div>
     );
}
 
export default ColorChange;