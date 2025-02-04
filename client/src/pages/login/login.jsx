import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginbg from '../../asset/loginbg.png';
import { useContext, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
function Login() {
    const [eye, setEye] = useState(false);
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [reset, setReset] = useState(false)
    const [typeOTP, setTypeOTP] = useState(false)
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const {dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) =>({...prev, [e.target.id]: e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post("/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            toast.success("Đăng nhập thành công")
            navigate('/')
        }catch(err){
            setError(true)
        }
    }
    const handleFinish = () => {
        setReset(false)
        setTypeOTP(true)
    }
    return ( 
        <div className="login">
            <img src={loginbg} alt="aa" className="imgLogin"/>
            <form className="loginForm">
                <h1 className="loginTitle">
                    Login
                </h1>
                <div className="loginContent">
                    <div className="loginBox">
                        <div className="loginBox-icon">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                            <label htmlFor="username">Email</label>
                        </div>
                        <input type="text" placeholder="Nhập email..." onChange={handleChange} id="username" />
                    </div>
                    {error && <p>Sai tên tài khoản hoặc mật khẩu</p>}
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
                    <span className="loginForgot" onClick={() => setReset(true)}>Forgot Password</span>
                </div>
                <button onClick={handleSubmit} className="loginBtn">Login</button>
                <p className="loginRegister">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
            {reset && <div className="reset">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Nhập email" id="email"/>
                <button onClick={handleFinish}>Gửi mã OTP</button>
            </div>}
            {typeOTP && <div className="reset">
                <label htmlFor="otp">Nhập mã OTP gửi về email của bạn:</label>
                <input type="text" id="otp"/>
                <button onClick={() => setTypeOTP(false)}>Xác nhận</button>
            </div>}
            
        </div>
     );
}

export default Login;