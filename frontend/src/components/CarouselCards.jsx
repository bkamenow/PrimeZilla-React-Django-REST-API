import Carousel from "react-bootstrap/Carousel";

export default function CarouselCards() {
    return (
        <div className='header-container'>
            <div className='carousel-overlay'></div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src='/images/game.png'
                        alt='First slide'
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src='/images/harry.jpg'
                        alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src='/images/lord.png'
                        alt='Third slide'
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
