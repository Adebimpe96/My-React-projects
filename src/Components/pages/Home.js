import { useContext } from "react";
import { AppContext } from "../../App";
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const { data, isLoading, isError, refetch } = useQuery(["cat"], async ()=> {
        try {
            const res = await Axios.get("https://catfact.ninja/fact");
            return res.data;
        } catch (error) {
            return console.log(error);
        }
    });
    const {username} =useContext(AppContext)
    if(isLoading){
        return <p>Loading...</p>   
    }
    if(isError){
        return <p>Error fetching data...</p>
    }
    return ( 
        <div>
       <h1>Welcome to {username}'s Page.</h1> 
       <p>{data?.fact}</p>
       <button onClick={refetch}> Update data</button>
        </div>
     );
}
 
export default Home;