import "./mailList.scss";

function MailList() {
    return ( 
        <div className="mailList">
            <h1 className="mailTitle">Save time, Save money</h1>
            <span className="mailDes">Sign up and we'll send the best deals for you</span>
            <div className="mailInput">
                <input type="text" placeholder="Email của bạn"/>
                <button>Đăng ký</button>
            </div>
            
        </div>
     );
}

export default MailList;
