import { useNavigate } from "react-router-dom";
import "./searchItems.scss";

function SearchItems({item}) {
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/hotels/${item._id}`)
    }
    const formatCurrencyVND = (amout) => {
        return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amout);
    }
    return ( 
        <div className="searchItems">
            <img src={item.photo[0]} alt="aa" className="searchImg"/>
            <div className="searchItemDes">
                <h1 className="sTitle">{item.name}</h1>
                <span className="sDistance"> <a href="/">Xem trên bản đồ</a>  Cách trung tâm {item.distance}m</span>
                <span className="sTaxi">Miễn phí taxi sân bay</span>
                <span className="sSubtitle">Studio Apartment có máy lạnh</span>
                <span className="sFeatured">Phòng Giường Đôi/Giường Đơn</span>
                <span className="sCancel">Free Cancellation</span>
                <span className="sCancelSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="sDetail">
                {item.rating && <div className="sDetailRating">
                    <div className="sDetailRating-small">
                        <span>Tuyệt vời</span>
                        <p>730 đánh giá</p>
                    </div>
                    <button>{item.rating}</button>
                </div>}
                <div className="sDetailText">
                    <span className="sPrice">{formatCurrencyVND(item.cheapestPrice)}</span>
                    <span className="sDetailTaxi">Includes taxs and fees</span>
                    <button onClick={handleDetail}>See availability</button>
                </div>
            </div>
        </div>
     );
}

export default SearchItems;