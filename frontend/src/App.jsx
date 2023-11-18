import "./App.css";
import CarouselCards from "./components/Carousel/CarouselCards";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import ShopsList from "./components/Shops/ShopsList";
import ShopItemsList from "./components/Shops/ShopItemsList";
import LoginUser from "./components/UserAuthentication/LoginUser";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Header />
            <CarouselCards />
            <Contacts />
            <Footer />
            <ShopsList />
            <ShopItemsList />
        </div>
    );
}

export default App;
