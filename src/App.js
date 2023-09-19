import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Profile from './Components/pages/Profile';
import Menu from './Components/pages/Menu';
import Navbar from './Components/pages/Navbar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Zainab");
  // const client = new QueryClient({defaultOptions: {
  //   queries:{
  //     refetchOnWindowFocus:false
  //   },
  // }});
  const client = new QueryClient();

  return (
    <div className="App">
    <QueryClientProvider client={client}>
  <AppContext.Provider value={{ username, setUsername }}>
<Router> &nbsp; 
<Navbar/>
<Routes>
<Route path='/' element= { <Home /> } />
<Route path='/about' element= { <About/> } /> 
<Route path='/profile' element= { <Profile /> } />  
<Route path='/menu' element= { <Menu /> }/>
<Route path= '*' element= { <h1>Page not found</h1> } />
</Routes>
</Router>
</AppContext.Provider> 
</QueryClientProvider> 
    </div>
  );
}

export default App;
