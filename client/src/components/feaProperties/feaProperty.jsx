import "./feaProperty.scss";
import useFetch from '../../hooks/useFetch';

function FeaturedProperties() {
    const {data, loading} = useFetch('http://localhost:3005/api/hotels?featured=true')
    return ( 
       <div className="feaPro">
            {loading ? ("loading") : 
            (<>
                {data.map((item) => (
                    <div className="feaProItems" key={item._id}>
                        <img src={item.photo[0]} alt="aa" className="feaProImg"/>
                        <span className="feaProName">{item.name}</span>
                        <span className="feaProCity">{item.city}</span>
                        <span className="feaProPrice">Giá từ {item.cheapestPrice}</span>
                        {item.rating && <div className="feaProRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>  
                        </div>}
                    </div>
                ))}
            </>)}
            
       </div>
        
     );
}

export default FeaturedProperties;