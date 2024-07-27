import { useContext } from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function NavBar() {
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);

    return ( 
    <div className="navbar">
       <div className="navContainer">
         <span className="logo" onClick={() => {navigate('/')}}>DatBooking.com</span>
         {user 
         ? user.username 
         
         :(<div className="navItems">
            <Link to="/register" className="navButton">Đăng ký</Link>
            <Link to="/login" className="navButton">Đăng nhập</Link>
         </div>)}
       </div>
    </div> 
    );
}

export default NavBar;