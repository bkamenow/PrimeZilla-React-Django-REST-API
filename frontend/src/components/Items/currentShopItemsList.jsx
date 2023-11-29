import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getShopItems } from "../../services/shopService";

import "./Items.css";
import ItemModal from "./ItemModal";
export default function CurrentShopItemsList() {
    const [shopItems, setShopItems] = useState([]);
    const { shopId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getShopItems(shopId);
                setShopItems(data);
            } catch (error) {
                console.log(error);
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
                        <ItemModal key={item.id} {...item} />
                    ))
                )}
            </div>
        </div>
    );
}
