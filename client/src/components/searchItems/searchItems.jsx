import { useNavigate } from "react-router-dom";
import "./searchItems.scss";

function SearchItems({item}) {
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/hotels/${item._id}`)
    }
    return ( 
        <div className="searchItems">
            <img src={item.photo[0]} alt="aa" className="searchImg"/>
            <div className="searchItemDes">
                <h1 className="sTitle">{item.name}</h1>
                <span className="sDistance">{item.distance}m từ trung tâm</span>
                <span className="sTaxi">Miễn phí taxi sân bay</span>
                <span className="sSubtitle">Studio Apartment có máy lạnh</span>
                <span className="sFeatured">Toàn bộ - 1 tắm - 21m<sup>2</sup> 1 phòng ngủ</span>
                <span className="sCancel">Free Cancellation</span>
                <span className="sCancelSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="sDetail">
                {item.rating && <div className="sDetailRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="sDetailText">
                    <span className="sPrice">{item.cheapestPrice}</span>
                    <span className="sDetailTaxi">Includes taxs and fees</span>
                    <button onClick={handleDetail}>See availability</button>
                </div>
            </div>
        </div>
     );
}

export default SearchItems;