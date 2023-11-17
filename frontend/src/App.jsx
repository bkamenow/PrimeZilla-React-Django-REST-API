import "./App.css";
import CarouselCards from "./components/CarouselCards";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Navigation />
            {/* <Main /> */}
            <CarouselCards />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
