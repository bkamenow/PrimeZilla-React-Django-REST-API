import { useState, useEffect, useCallback } from "react";

import { getOwnerShops } from "../../../services/shopService";

import EditShop from "../EditShop/EditShop";
import DeleteShop from "../DeleteShop/DeleteShop";
import ShopCard from "./ShopCard";

export default function OwnerShopsList() {
    const userId = localStorage.getItem("userId");
    const [shops, setShops] = useState([]);
    const [shopId, setShopId] = useState(null);
    const [shopName, setShopName] = useState(null);
    const [showAddItem, setShowAddItem] = useState(false);
    const [showEditShop, setShowEditShop] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOwnerShops(userId);
                setShops(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [userId]);

    const fetchUpdatedData = async () => {
        try {
            const updatedData = await getOwnerShops(userId);
            setShops(updatedData);
        } catch (error) {
            console.log(error);
        }
    };

    const addItemClickHandler = useCallback((shopId, shopName) => {
        setShowAddItem(true);
        setShopId(shopId);
        setShopName(shopName);
    }, []);

    const hideAddItem = useCallback(() => {
        setShowAddItem(false);
    }, []);

    const editShopClickHandler = useCallback((shopId) => {
        setShowEditShop(true);
        setShopId(shopId);
    }, []);

    const hideEditShop = useCallback(async () => {
        setShowEditShop(false);
        try {
            const updatedData = await getOwnerShops(userId);
            setShops(updatedData);
        } catch (error) {
            console.log(error);
        }
    }, [userId]);

    const handleDeleteShopClick = useCallback((shopId, shopName) => {
        setIsDeleting(true);
        setShopId(shopId);
        setShopName(shopName);
    }, []);

    const handleDeleteShopClose = useCallback(() => {
        setIsDeleting(false);
        fetchUpdatedData();
    }, []);

    return (
        <>
            {showAddItem && (
                <CreateItem
                    onClose={hideAddItem}
                    onCreate={hideAddItem}
                    shopId={shopId}
                    shopName={shopName}
                />
            )}

            {showEditShop && (
                <EditShop
                    onClose={hideEditShop}
                    onCreate={hideEditShop}
                    shopId={shopId}
                />
            )}

            {isDeleting && (
                <DeleteShop
                    onClose={handleDeleteShopClose}
                    shopId={shopId}
                    shopName={shopName}
                />
            )}

            <div className='background'>
                <div className='background-overlay'></div>
                <div className='shop-list-container items owner-shops'>
                    {shops.map((shop) => (
                        <ShopCard
                            key={shop.id}
                            shop={shop}
                            onAddItemClick={addItemClickHandler}
                            onEditShopClick={editShopClickHandler}
                            onDeleteShopClick={handleDeleteShopClick}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
