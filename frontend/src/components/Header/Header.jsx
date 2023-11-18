export default function Header() {
    return (
        <header className='header-container'>
            <div className='header-overlay'>
                <div className='header-text-container'>
                    <div className='welcome-message'>
                        <h2>MONSTROUS OFFERS</h2>
                        <h3>Only at PrimeZilla</h3>
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
