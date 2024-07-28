import NavBar from "../../components/nav/nav";
import "./hotelDetail.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft,
    faAngleRight,
    faCircleXmark, 
    faLocationDot,
    faShower, 
    faUmbrellaBeach, 
    faWifi, 
    faChair, 
    faSnowflake, 
    faTv, 
    faSquareParking, 
    faPeopleGroup, 
    faEye,   
    faT} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import { useState } from "react";

function HotelsDetail() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"},
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/336582317.jpg?k=29d57859ffc7bf7e673565e6d487a7acfff9ce4e9c3c6f13fc2a08c4e33b1f85&o=&hp=1"},
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/336588539.jpg?k=5670128c817483102c8e83e1b09f6965096cd7c2bfceee4a83dae6fa5ba8597d&o=&hp=1"},
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/153937477.jpg?k=82a3e4a701d7d534b32ea6e96eaeecb466903e107b9bd07298abbf2f08024ff9&o=&hp=1"},
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/351072016.jpg?k=285441458d495d3c3cd30a7eeb934ab87eadceff9f2843523903c8ccf44b4616&o=&hp=1"},
        {src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/115650468.jpg?k=8f518825484355b05b2068915c4e27699a81d73e4523e616c3f2f001cbc79f92&o=&hp=1"},
    ]
    const handleSlider = (direction) => {
        let newSlider;
        if(direction === 'l') {
            newSlider = slideNumber === 0 ? 5 : slideNumber - 1;
        }  
        if (direction === 'r') {
            newSlider = slideNumber === 5 ? 0 : slideNumber + 1;  
        }
        setSlideNumber(newSlider);
    }
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }
    return ( 
    <div className="hotelsDetail">
        <NavBar/>
        <div className="hotelContainer">
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                <FontAwesomeIcon icon ={faAngleLeft} className="arrow" onClick={() => handleSlider('l')}/>
                <div className="slideWarpper">
                    <img src={photos[slideNumber].src} alt="aa" className="slideImg"/>
                </div>
                <FontAwesomeIcon icon ={faAngleRight} className="arrow"  onClick={() => handleSlider('r')} />
            </div>}
            <div className="hotelContainerNavbar">
                <span className="active">Tổng quan</span>
                <span>Thông tin & giá</span>
                <span>Tiện nghi</span>
                <span>Quy tắc chung</span>
                <span>Ghi chú</span>
                <span>Đánh giá (730)</span>
            </div>
            <div className="hotelWrapper">
                <button className="bookNow">Resever or Book Now!</button>
                <h1 className="hotelTitle">
                    Grand Hotel
                </h1>
                <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} className="icon"/>
                <span>John St 125 New york</span>
                </div>
                <span className="hotelDistance">
                    Excellent location - 500m from center
                </span>
                <span className="hotelPrice">
                    Book a stay over $114 at this property and get a free airport taxi
                </span>
                <div className="hotelImgs">
                    {photos.map((photo, i) => (
                        <div className="photoWarpper">
                            <img onClick={() => handleOpen(i)} src={photo.src} alt="aa" className="photoHotel"/>
                        </div>
                    ))}
                </div>
                <div className="hotelExtension">
                    <div className="hotelExtensionWrap">
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faShower} className="icon"/>
                            <span>Phòng tắm riêng</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faUmbrellaBeach} className="icon"/>
                            <span>Bãi biển</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faUmbrellaBeach} className="icon"/>
                            <span>Giáp biển</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faWifi} className="icon"/>
                            <span>WiFi miễn phí</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faChair} className="icon"/>
                            <span>Ban công</span>
                        </div>
                    </div>
                    <div className="hotelExtensionWrap">
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faSnowflake} className="icon"/>
                            <span>Điều hòa không khí</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faTv} className="icon"/>
                            <span>TV màn hình phẳng</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faSquareParking} className="icon"/>
                            <span>Chỗ đổ xe</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faPeopleGroup} className="icon"/>
                            <span>Phòng gia đình</span>
                        </div>
                        <div className="hotelExtensionDetail">
                            <FontAwesomeIcon icon={faEye} className="icon"/>
                            <span>Tằm nhìn ra khung cảnh</span>
                        </div>
                    </div>
                </div>
                <div className="hotelDetailDes">
                    <div className="hotelDetailDesText">
                        <h1 className="hotelTitle">Aparthotel Stare Miasto</h1>
                        <p className="hotelDesc">
                            Aparthotel Stare Miasto tọa lạc ngay tại trung tâm Khu Phố Cổ của thành phố Kraków,
                             cách Quảng trường Chợ Chính chỉ 120 m. Chỗ nghỉ có các căn hộ hiện đại rộng rãi với
                              WiFi miễn phí.Nằm trong một tòa nhà cổ xưa, Aparthotel Stare Miasto có thiết kế nội
                               thất độc đáo với tông màu ấm của gạch cùng các chi tiết gỗ. Tất cả căn hộ tại
                                Aparthotel Stare Miasto đều được trang bị máy điều hòa, TV màn hình LCD và khu 
                                vực bếp nhỏ đầy đủ tiện nghi, bao gồm tủ lạnh và ấm đun nước điện. Quầy lễ tân 24 
                                giờ cung cấp dịch vụ đặt vé và tour du lịch. Aparthotel Stare Miasto nằm
                                 trong bán kính 900 m từ Lâu đài Wawel. Khu vực xung quanh chỗ nghỉ có một 
                                 loạt nhà hàng và quán cà phê. Cả ga Kraków Główny và Trung tâm mua sắm Galeria
                                  Krakowska đều chỉ cách chỗ nghỉ 1,6 km.
                        </p>
                    </div>
                    <div className="hotelDetailDesPrice">
                        <h1>Perfect for a 9-night stay</h1>
                        <span>Located in the real heart of Krakow, this property has an excellen location score of 9.8</span>
                        <h2><b>$900</b> (9 nights)</h2>
                        <button>Reserve or Book Now</button>
                    </div>

                </div>
            </div>
        </div>
        <MailList/>
        <div className="footerr"><Footer/></div>
    </div> );
}

export default HotelsDetail;