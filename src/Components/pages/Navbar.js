import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div >
        <Link style={{textDecoration: 'none'}} to="/">Home</Link> &nbsp;
        <Link style={{textDecoration: 'none'}} to="/menu">Menu</Link> &nbsp;
        <Link style={{textDecoration: 'none'}} to="/about">About</Link> &nbsp;
        <Link style={{textDecoration: 'none'}} to="/profile">Profile</Link> &nbsp; <br/>
        </div>
     );
}
 
export default Navbar;