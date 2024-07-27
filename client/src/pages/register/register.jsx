import './register.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import loginbg from '../../asset/loginbg.png';
import { useState } from "react";
function Register() {
     const [eye, setEye] = useState(false);
    return ( 
        <div className="register">
             <img src={loginbg} alt="aa" className="imgLogin"/>
            <form action="#" className="loginForm">
                <h1 className="loginTitle">
                    Register
                </h1>
                <div className="loginContent">
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                            <label htmlFor="userName">User Name</label>
                        </div>
                        <input type="text" placeholder="Nhập username..." id="userName" />
                    </div>
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <input type="text" placeholder="Nhập email..." id="email" />
                    </div>
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faPhone} className="icon"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <input type="text" placeholder="Nhập số điện thoại..." id="phone" />
                    </div>
                    
                    <div className="loginBox">
                        <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} onClick={()=>setEye(!eye)} className="iconEye"/>
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faLock} className="icon"/>
                            <label htmlFor="pass">Password</label>
                        </div>
                        <input type={eye ? "text" : "password"} placeholder="Nhập mật khẩu..." id="pass" />
                    </div>
                </div>
                <div className="loginCheck">
                    <div className="loginCheck-group">
                        <input type="checkbox" id="loginCheck" />
                        <label htmlFor="loginCheck">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="loginBtn">Register</button>
                <p className="loginRegister">
                    Do have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
     );
}

export default Register;