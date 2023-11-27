import "./Footer.css";
export default function Footer() {
    return (
        <footer className='dark-footer'>
            <div className='row justify-content-between'>
                <div className='col-md-6 text-white align-self-center text-center text-md-left my-2'>
                    Copyright © 2023 Borislav Kamenov.
                </div>
                <div
                    className='col-md-6 align-self-center text-center text-md-right my-2'
                    id='social-media'
                >
                    <a href='#' className='d-inline-block text-center ml-2'>
                        <i className='fa fa-facebook' aria-hidden='true'></i>
                    </a>
                    <a href='#' className='d-inline-block text-center ml-2'>
                        <i className='fa fa-twitter' aria-hidden='true'></i>
                    </a>
                    <a href='#' className='d-inline-block text-center ml-2'>
                        <i className='fa fa-medium' aria-hidden='true'></i>
                    </a>
                    <a href='#' className='d-inline-block text-center ml-2'>
                        <i className='fa fa-linkedin' aria-hidden='true'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
