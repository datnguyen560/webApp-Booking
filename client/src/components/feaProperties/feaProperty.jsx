import "./feaProperty.scss";
import useFetch from '../../hooks/useFetch';

function FeaturedProperties() {
    const {data, loading} = useFetch('/api/hotels?featured=true')
    const capitalizeWord = (string) => {
        string = string.trim().replace(/\s+/g, ' ');
        return string.split(' ').map(word =>capitalizeFirstLetter(word)).join(' ')
    }
    const capitalizeFirstLetter = (string) => {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
    return ( 
       <div className="feaPro">
            {loading ? ("loading") : 
            (<>
                {data.map((item) => (
                    <div className="feaProItems" key={item._id}>
                        <img src={item.photo[0]} alt="aa" className="feaProImg"/>
                        <span className="feaProName">{capitalizeWord(item.name)}</span>
                        <span className="feaProCity">{capitalizeWord(item.city)}</span>
                        <span className="feaProPrice">Giá từ {item.cheapestPrice}</span>
                        {item.rating && <div className="feaProRating">
                            <button>{item.rating}</button>
                            <span>Tuyệt vời</span>  
                        </div>}
                    </div>
                ))}
            </>)}
            
       </div>
        
     );
}

export default FeaturedProperties;