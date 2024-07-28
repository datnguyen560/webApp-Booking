import { useContext } from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import avatar from "../../asset/avatar.png";
function NavBar() {
   const capitalizeFirstLetter = (string) => {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);
    return ( 
    <div className="navbar">
       <div className="navContainer">
         <span className="logo" onClick={() => {navigate('/')}}>DatBooking.com</span>
         {user 
         ? 
         <div className="user" title="Profile">
            <img src={user?.photo || avatar} alt="aa"/>
            <span>{capitalizeFirstLetter(user.username) }</span>
         </div>
         :
         (<div className="navItems">
            <Link to="/register" className="navButton">Đăng ký</Link>
            <Link to="/login" className="navButton">Đăng nhập</Link>
         </div>)}
       </div>
    </div> 
    );
}

export default NavBar;