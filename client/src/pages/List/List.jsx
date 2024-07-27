import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import NavBar from "../../components/nav/nav";
import "./List.scss";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItems from "../../components/searchItems/searchItems";
import useFetch from '../../hooks/useFetch';
function Hotels() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);
    const {data, loading} = useFetch(`http://localhost:3005/api/hotels?city=${destination}`)
    return ( 
    <div className="hotels">
        <NavBar/>
       <Header/>
       <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
                <h1 className="listTitle">Search</h1>
                <div className="listSearchItem">
                    <label>Điểm đến</label>
                    <input type="text" placeholder={destination}/>
                </div>
                <div className="listSearchItem">
                    <label>Ngày check-in</label>
                    <div className="listSearchText">
                        <span >{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
                        <span onClick={() => setOpenDate(!openDate)}>Edit</span>
                    </div>
                    <label>Ngày check-out</label>
                    <div className="listSearchText">
                        <span>{`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        <span onClick={() => setOpenDate(!openDate)}>Edit</span>
                    </div>
                    {openDate && <DateRange
                    onChange={(item) => {setDate([item.selection])}}
                    minDate={new Date()}
                    ranges={date}
                    /> }
                </div>
                <div className="listSearchItemm">
                    <label>Lựa chọn</label>
                    <div className="listOptionItemPre">
                        <span className="listOptionItemText">Giá thấp nhất <small>(mỗi đêm)</small></span>
                        <input type="number" 
                        min={100000} 
                        className="listOptionItemInput" 
                        placeholder="100.000"
                        />
                    </div> 
                    <div className="listOptionItemPre">
                        <span className="listOptionItemText">Giá cao nhất <small>(mỗi đêm)</small></span>
                        <input type="number" 
                        className="listOptionItemInput" 
                        placeholder="300.000"
                        />
                    </div> 
                    <div className="listOptionItem">
                        <span className="listOptionItemText">Người lớn</span>
                        <input type="number" 
                        min={1} 
                        className="listOptionItemInput" 
                        placeholder={options.adult}/>
                    </div> 
                    <div className="listOptionItem">
                        <span className="listOptionItemText">Trẻ em</span>
                        <input type="number" 
                        min={0} 
                        className="listOptionItemInput" 
                        placeholder={options.children}
                        />
                    </div> 
                    <div className="listOptionItem">
                        <span className="listOptionItemText">Phòng</span>
                        <input type="number" 
                        min={1} 
                        className="listOptionItemInput" 
                        placeholder={options.room}
                        />
                    </div> 
                </div>
                <button className="btnSearch">Tìm kiếm</button>
            </div>
            <div className="listResult">
                { data.length <= 0 ? "Ko tìm thấy khách sạn nào!" : 
                <>
                {data.map((item) => 
                (<SearchItems item={item} key={item._id}/>)
                )}
                </>}
            </div>
        </div>
       </div>
    </div> );
}

export default Hotels;