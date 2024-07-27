import "./propertyList.scss";
import useFetch  from "../../hooks/useFetch";
const img = [
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
]
function Properties() {
    const {data, loading} = useFetch("/api/hotels/countByType?types=hotel,resort,villas,apartment,cabin")
    return ( 
        <div className="propertiesList">
            {loading ? "loading" : <>
                <div className="proListItems">
                    <img src={img[0]} alt="aa" className="proListImg"/>
                    <div className="proListTitle">
                        <h3>Khách sạn</h3>
                        <p>{data[0]} Khách sạn</p>
                    </div>
                </div>
                <div className="proListItems">
                    <img src={img[1]} alt="aa" className="proListImg"/>
                    <div className="proListTitle">
                        <h3>Căn hộ</h3>
                        <p>{data[1]} Căn hộ</p>
                    </div>
                </div>
                <div className="proListItems">
                    <img src={img[2]} alt="aa" className="proListImg"/>
                    <div className="proListTitle">
                        <h3>Các resort</h3>
                        <p>{data[2]} Resort</p>
                    </div>
                </div>
                <div className="proListItems">
                    <img src={img[3]} alt="aa" className="proListImg"/>
                    <div className="proListTitle">
                        <h3>Các biệt thự</h3>
                        <p>{data[3]} biệt thự</p>
                    </div>
                </div>
                <div className="proListItems">
                    <img src={img[4]} alt="aa" className="proListImg"/>
                    <div className="proListTitle">
                        <h3>Ca bin nghĩ dưỡng</h3>
                        <p>{data[4]} cabin</p>
                    </div>
                </div>
            </>}
        </div>
     );
}

export default Properties;