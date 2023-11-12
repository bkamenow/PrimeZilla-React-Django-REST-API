export default function Contacts() {
    return (
        <div className='container-contacts'>
            <h1>Contact Us</h1>

            <div className='content-container'>
                <div className='contact-info'>
                    <p>Contact Information</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 123 456 7890</p>
                    <p>Address: 123 Main Street, Cityville</p>
                </div>

                <div className='contact-form'>
                    <form action='#' method='post'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Your Name'
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Your Email'
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='Your Message'
                                required
                            ></textarea>
                        </div>

                        <div className='form-group'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
