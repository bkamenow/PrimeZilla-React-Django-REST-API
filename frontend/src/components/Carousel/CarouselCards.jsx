import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getAllShops } from "../../services/shopService";
import { Link } from "react-router-dom";

export default function CarouselCards() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShopsWithItems = async () => {
            try {
                const allShops = await getAllShops();
                const shopsWithItems = allShops.filter(
                    (shop) => shop.items.length > 0
                );
                const firstFiveShops = shopsWithItems.slice(0, 5);
                setShops(firstFiveShops);
            } catch (error) {
                console.error("Error fetching shops:", error);
            }
        };

        fetchShopsWithItems();
    }, []);

    return (
        <div className='header-container'>
            <div className='carousel-overlay'></div>
            <Carousel>
                {shops.map((shop) => (
                    <Carousel.Item key={shop.id}>
                        <Link to={`/items/${shop.id}`}>
                            <img
                                className='d-block w-100'
                                src={shop.image_url}
                                alt={`Shop ${shop.name}`}
                            />
                        </Link>
                        <Carousel.Caption>
                            <h5>{shop.name}</h5>
                            <p>{shop.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
