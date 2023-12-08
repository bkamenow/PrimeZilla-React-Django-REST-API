import { useState, useEffect } from "react";

import { getAllItems } from "../../services/itemService";

import ItemModal from "./ItemModal";

export default function ItemsList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllItems();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container items'>
                {items.map((item) => (
                    <ItemModal key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}
