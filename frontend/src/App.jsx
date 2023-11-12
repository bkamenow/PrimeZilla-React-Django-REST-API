import "./App.css";
import CarouselCards from "./components/CarouselCards";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <Main />
            <CarouselCards />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
