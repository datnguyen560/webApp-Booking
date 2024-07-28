import React from 'react';
import './register.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import loginbg from '../../asset/loginbg.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
function Register() {
    const navigate = useNavigate();
     const [eye, setEye] = useState(false);
     const [error, setError] = useState(false);
     const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
     })
     const handleChange = (e) => {
        setCredentials((prev) =>({...prev, [e.target.id]: e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/users", credentials)
            toast.success("Bạn đã đăng ký thành công")
            navigate('/login')
        }catch(err){
            setError(true)
            toast.error("Đăng ký ko thành công")
        }

    }
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
                            <label htmlFor="username">User Name</label>
                        </div>
                        <input type="text" placeholder="Nhập username..." onChange={handleChange} id="username" />
                    </div>
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <input type="text" placeholder="Nhập email..." onChange={handleChange} id="email" />
                        {error && <p>Email đăng ký ko hợp lệ</p>}
                    </div>
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faPhone} className="icon"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <input type="text" placeholder="Nhập số điện thoại..." onChange={handleChange} id="phone" />
                    </div>
                    
                    <div className="loginBox">
                        <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} onClick={()=>setEye(!eye)} className="iconEye"/>
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faLock} className="icon"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input type={eye ? "text" : "password"} placeholder="Nhập mật khẩu..." onChange={handleChange} id="password" />
                    </div>
                </div>
                <div className="loginCheck">
                    <div className="loginCheck-group">
                        <input type="checkbox" id="loginCheck" />
                        <label htmlFor="loginCheck">Remember me</label>
                    </div>
                </div>
                <button className="loginBtn" onClick={handleSubmit}>Register</button>
                <p className="loginRegister">
                    Do have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
     );
}

export default Register;