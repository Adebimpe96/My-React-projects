import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    };

    const handleDecrease = () => {
        if (count !== 0){
         setCount(count - 1)
        } else{
            setCount(0)
        };       
    };
    const handleReset = () => {
        setCount(0)
    };
    return ( 
        <div>

        <button onClick={handleIncrease}>Increase  </button> 
        <button onClick={handleDecrease}>Decrease  </button> 
        <button onClick={handleReset}>Reset  </button> 
        <div>{count}</div>
        </div>
     );
}
 
export default Counter;