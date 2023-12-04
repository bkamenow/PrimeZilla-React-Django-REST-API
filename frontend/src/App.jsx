import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ShopsList from "./components/Shops/ShopsList/ShopsList";
import Home from "./components/Home/Home";
import ItemsList from "./components/Items/ItemsList";
import CurrentShopItemsList from "./components/Items/CurrentShopItemsList";
import OwnerShopsList from "./components/Shops/OwnerShopsList/OwnerShopsList";
import Error404 from "./components/404/404";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops-list' element={<ShopsList />} />
                <Route path='/your-shops' element={<OwnerShopsList />} />
                <Route
                    path='/items/:shopId'
                    element={<CurrentShopItemsList />}
                />
                <Route path='/all-items' element={<ItemsList />} />
                <Route path='/*' element={<Error404 />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
