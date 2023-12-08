import { Routes, Route } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Path from "./paths";

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
            <AuthProvider>
                <CartProvider>
                    <Navigation />
                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Shops} element={<ShopsList />} />
                        <Route
                            path={Path.YourShops}
                            element={<OwnerShopsList />}
                        />
                        <Route
                            path={Path.ShopItems}
                            element={<CurrentShopItemsList />}
                        />
                        <Route path={Path.AllItems} element={<ItemsList />} />
                        <Route path={Path.Error} element={<Error404 />} />
                        <Route path={Path.Cart} element={<Cart />} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
