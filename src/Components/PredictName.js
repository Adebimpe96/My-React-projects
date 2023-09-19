import { useEffect, useState } from "react";
import  Axios  from "axios";

const PredictAge = () => {
   const [name, setName] = useState('');
   const [predictedValues, setPredictedValues] = useState(null);

const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((response)=>{
        setPredictedValues(response.data);
        console.log(response.data);
    });
}
    return ( 
        <div>
        <input placeholder="Pedro.." onChange={(event)=> {
            setName(event.target.value)
        } }/>
        <button onClick={fetchData}>Predict Values</button>

        <h2>Predict Name: {predictedValues?.name}</h2>
        <h2>Predict Age: {predictedValues?.age}</h2>
        <h2>Predict Count: {predictedValues?.count}</h2>
        </div>
     );
}
 
export default PredictAge;