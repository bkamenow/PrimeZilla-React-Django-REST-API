import "./Header.css";
export default function Header() {
    return (
        <header className='header-container'>
            <div className='header-overlay'>
                <div className='header-text-container'>
                    <div className='welcome-message'>
                        <h2>MONSTROUS OFFERS</h2>
                        <h3>Only at </h3>
                        <h3
                            className='prmzila-text'
                            style={{ color: "#57a04f" }}
                        >
                            PrimeZilla
                        </h3>
                    </div>
                    <img
                        src='public/images/godzilla.png'
                        alt='Godzilla'
                        className='header-image'
                    />
                </div>
            </div>
        </header>
    );
}
