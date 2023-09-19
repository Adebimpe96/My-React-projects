import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const GetCat = () => {

    const [fact, setFact] = useState([]);
    const fetchCatFacts = () => {
        Axios.get("https://catfact.ninja/fact")
        .then((res)=> {
            const data = res.data;
            setFact(data.fact);
        });
    }
    useEffect (()=>{
        fetchCatFacts();
    }, [])

    return ( 
        
        <div>
        <button onClick={fetchCatFacts}>Facts about Cats</button>
        <p>{fact}</p>
        </div>
     );
}
 
export default GetCat;