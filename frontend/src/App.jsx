import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ShopsList from "./components/Shops/ShopsList";
import Home from "./components/Home";
import ItemsList from "./components/Items/ItemsList";
import CurrentShopItemsList from "./components/Items/currentShopItemsList";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops-list' element={<ShopsList />} />
                <Route
                    path='/items/:shopId'
                    element={<CurrentShopItemsList />}
                />
                <Route path='/all-items' element={<ItemsList />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
