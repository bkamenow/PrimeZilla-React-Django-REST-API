import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ShopsList from "./components/Shops/ShopsList";
import ShopItemsList from "./components/Shops/ShopItemsList";
import Home from "./components/Home";
import CreateShop from "./components/Shops/CreateShop";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops-list' element={<ShopsList />} />
                <Route path='/items/:shopId' element={<ShopItemsList />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
