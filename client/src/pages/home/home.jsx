import FeaturedProperties from "../../components/feaProperties/feaProperty";
import Feature from "../../components/feature/feature";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MailList from "../../components/mailList/mailList";
import NavBar from "../../components/nav/nav";
import Properties from "../../components/properties/propertyList";
import "./home.scss";

function Home() {
    return ( 
    <div className="home">
        <NavBar/>
        <Header/>
        <div className="container">
            <h1 className="homeTitle">Khám phá Việt Nam</h1>
            <h3 className="homeTitle">Các điểm đến phổ biến này có nhiều điều chờ đón bạn</h3>
            <Feature/>
            <h1 className="homeTitle">Tìm theo loại chổ nghĩ</h1>
            <Properties/>
            <h1 className="homeTitle">Nhà ở mà khách yêu thích</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
    </div> );
}

export default Home;