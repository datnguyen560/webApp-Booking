import useFetch from '../../hooks/useFetch';
import './feature.scss';
const img3 = "https://cf2.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o="
const img2 = "https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
const img1 = "https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
function Feature() {
   const {data, loading} = useFetch('http://localhost:3005/api/hotels/countByCity?cities=hồ chí minh,đà lạt,vũng tàu');
    return ( 
        <div className="feature">
            {loading ? ('loading please wait'): ( <>
                <div className='featureItems'>
                    <img src={img2} alt='aa' className='featureImg'/>
                    <div className='featureTitle'>
                        <h1>Hồ Chí Minh</h1>
                        <h2>{`${data[0]}  ${data[0] > 1 ? 'properties' : "property"}`}</h2>
                    </div>
                </div>
                <div className='featureItems'>
                    <img src={img1} alt='aa' className='featureImg'/>
                    <div className='featureTitle'>
                        <h1>Đà Lạt</h1>
                        <h2>{`${data[1]} ${data[1] > 1 ? 'properties' : "property"}`}</h2>
                    </div>
                </div>
                <div className='featureItems'>
                    <img src={img3} alt='aa' className='featureImg'/>
                    <div className='featureTitle'>
                        <h1>Vũng Tàu</h1>
                        <h2>{`${data[2]} ${data[2] > 1 ? 'properties' : "property"}`}</h2>
                    </div>
                </div>
            </>)}
        </div>
     );
}

export default Feature;