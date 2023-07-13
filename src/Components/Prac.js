import { useState } from "react";

const InputChange = () => {

const [inputValue, setInputValue] = useState("");
const handleInputChange = (e) => {
setInputValue(e.target.value)
};

    return ( 
        <div>
         <input type="text" onChange={handleInputChange}/>
         <div>{inputValue}</div>

        </div>
     );
}
 
export default InputChange;