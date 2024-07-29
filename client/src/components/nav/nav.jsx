import { useContext, useState } from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import avatar from "../../asset/avatar.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, 
   faBagShopping,
   faChair,
   faBox,
   faComment,
   faHeart,
   faRightFromBracket
 } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
   const [userDetail, setUserDetail] = useState(false);
   const capitalizeFirstLetter = (string) => {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);

   const handleLogout = async () => { 
      try {
      await axios.post('auth/logout', {}, {
         withCredentials: true
      });
      setUserDetail(false)
      window.location.reload();
      }
      catch (err) {
         toast.error("Đăng xuất thất bại")
      }
     
   }
    return ( 
    <div className="navbar">
       <div className="navContainer">
         <span className="logo" onClick={() => {navigate('/')}}>DatBooking.com</span>
         {user 
         ? 
           <div className="userWrap">
               <div className="user" title="Profile" onClick={() => setUserDetail(!userDetail)}>
                  <img src={user?.photo || avatar} alt="aa"/>
                  <div className="user-small">
                     <h3>{capitalizeFirstLetter(user.username) }</h3>
                     <span>Genius Cấp 1</span>
                  </div>
               </div>
               {userDetail && <div className="userDetail">
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faUser} className="icon"/>
                     <span>Quản lý tài khoản</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faBagShopping} className="icon"/>
                     <span>Đặt chỗ & Chuyến đi</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faChair} className="icon"/>
                     <span>Chương trình khách hàng thân thiết Genius</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faBox} className="icon"/>
                     <span>Tặng thưởng & Ví</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faComment} className="icon"/>
                     <span>Đánh giá</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faHeart} className="icon"/>
                     <span>Đã lưu</span>
                  </div>
                  <div className="userDetail-1">
                     <FontAwesomeIcon icon={faRightFromBracket} className="icon"/>
                     <span onClick={handleLogout}>Đăng xuất</span>
                  </div>
               </div>}
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