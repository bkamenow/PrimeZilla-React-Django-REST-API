import "./App.css";
import CarouselCards from "./components/CarouselCards";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Header />
            {/* <Main /> */}
            <CarouselCards />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
