import { useState, useEffect } from "react";

import * as userService from "../../services/userService";

import UserDetailsCard from "./UserDetailsCard";

export default function UserDetails({ onClose }) {
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        userService
            .getOne(userId)
            .then((response) => {
                const userData = response.data[userId];
                setUser(userData);
                console.log(userData);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error.message);
            });
    }, [userId]);

    const handleEditClick = () => {
        // Add your logic for handling edit click
        console.log("Edit button clicked");
    };

    const handleDeleteClick = () => {
        // Add your logic for handling delete click
        console.log("Delete button clicked");
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {user && (
                    <UserDetailsCard
                        imageUrl={user.image_url}
                        username={user.username}
                        email={user.email}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                    />
                )}
            </div>
        </div>
    );
}
