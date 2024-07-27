import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,
     faPlane,
     faEarthAsia,
     faCar,
     faCertificate,
     faTaxi,
     faCalendarDays,
     faPerson,
     faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    }]);

    const [ openOptions, setOpenOptions] = useState(false);
    const [ options, setOptions ] = useState({
        adult: 1,
        children: 2,
        room: 1,
    })
    const handleOptions = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, 
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1, 
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options}})
    }
    
    return ( 
    <div className="header">
       <div className="headerContainer">
           <div className="headerList">
               <div className="headerListItems active"> 
                    <FontAwesomeIcon icon={faBed} />
                    <span>Lưu trú</span>
                </div>
                <div className="headerListItems"> 
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Chuyến bay</span>
                </div>
                <div className="headerListItems"> 
                    <FontAwesomeIcon icon={faEarthAsia} />
                    <span>Chuyến bay + Khách sạn</span>
                </div>
                <div className="headerListItems"> 
                    <FontAwesomeIcon icon={faCar} />
                    <span>Thuê xe</span>
                </div>
                <div className="headerListItems"> 
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Địa điểm tham quan</span>
                </div>
                <div className="headerListItems"> 
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi sân bay</span>
                </div>
           </div>
           <h1 className="headerTitle">Chốn thiên đường <br/> dành cho bạn</h1>
           <p className="headerDes">Đặt nhà, biệt thự, cabin nguyên căn và hơn thế</p>
           <button className="headerBtn">Khám phá nhà nghỉ dưỡng</button>
           <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text"
                     placeholder="Bạn muốn đi đâu..."
                     className="headerSearchInput"
                     onChange={e => setDestination(e.target.value.toLowerCase())}/>
                </div>
                 <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} đến ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange 
                        editableDateInputs={true} 
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} 
                        className="date"
                        minDate={new Date()}
                    />}
                </div>
                 <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={() => {setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult} người lớn - ${options.children} trẻ em - ${options.room} phòng`}</span>
                    {openOptions && 
                    <div className="option" >
                        <div className="optionItems">
                            <span className="optionItemsText">Người lớn</span>
                            <div className="optionCouter">
                                <button disabled={options.adult <= 1}
                                 className="optionCouterBtn"
                                 onClick={() => handleOptions('adult', 'd')}
                                 >-</button>
                                <span className="optionCouterNumber">{options.adult}</span>
                                <button 
                                className="optionCouterBtn"
                                onClick={() => handleOptions('adult', 'i')}
                                >+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionItemsText">Trẻ em</span>
                            <div className="optionCouter">
                                <button 
                                disabled={options.children <= 0} 
                                className="optionCouterBtn"
                                onClick={() => handleOptions('children', 'd')}
                                >-</button>
                                <span className="optionCouterNumber">{options.children}</span>
                                <button 
                                className="optionCouterBtn"
                                onClick={() => handleOptions('children', 'i')}
                                >+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionItemsText">Phòng</span>
                            <div className="optionCouter">
                                <button 
                                disabled={options.room <= 1} 
                                className="optionCouterBtn"
                                onClick={() => handleOptions('room', 'd')}
                                >-</button>
                                <span className="optionCouterNumber">{options.room}</span>
                                <button 
                                className="optionCouterBtn"
                                onClick={() => handleOptions('room', 'i')}
                                >+</button>
                            </div>
                        </div>
                        <button onClick={() => {setOpenOptions(!openOptions)}} className="optionBtn">Xong</button>
                    </div>}
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <button className="headerSearchItemBtn" onClick={handleSearch}>Tìm kiếm</button>
           </div>
       </div>
    </div> );
}

export default Header;