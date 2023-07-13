import { useState } from "react";

const ShowHideText = () => {

    const [showValue, setShowValue] = useState(true)


    return ( 
        <div>
        <button onClick={()=> setShowValue(!showValue)}>Show/hide</button>
        {showValue && ( <h1>Hello I am here with you.</h1> )}
         
        </div>
     );
}
 
export default ShowHideText;