import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getShopItems, getOneShop } from "../../services/shopService";

import "./Items.css";
import ItemModal from "./ItemModal";

export default function CurrentShopItemsList() {
    const [shopItems, setShopItems] = useState([]);
    const [shopDetails, setShopDetails] = useState({});
    const { shopId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const itemsData = await getShopItems(shopId);
                setShopItems(itemsData);

                const shopData = await getOneShop(shopId);
                console.log(shopData.owner);
                setShopDetails(shopData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [shopId]);

    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container'>
                {shopItems.length === 0 ? (
                    <div className='no-items-message'>
                        <h1>There are no items yet!</h1>
                    </div>
                ) : (
                    shopItems.map((item) => (
                        <ItemModal
                            key={item.id}
                            {...item}
                            owner={shopDetails.owner}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
