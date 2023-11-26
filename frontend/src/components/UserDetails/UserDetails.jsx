import { useState, useEffect } from "react";

import * as userService from "../../services/userService";

import UserDetailsCard from "./UserDetailsCard";
import EditUser from "../EditUser/EditUser";

export default function UserDetails({ onClose }) {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        userService
            .getOne(userId)
            .then((response) => {
                const userData = response.data[userId];
                setUser(userData);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error.message);
            });
    }, [userId]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditUserClose = async () => {
        setIsEditing(false);
        try {
            const response = await userService.getOne(userId);
            const userData = response.data[userId];
            setUser(userData);
        } catch (error) {
            console.error(
                "Error fetching updated user details:",
                error.message
            );
        }
    };

    const handleDeleteClick = () => {
        // Add your logic for handling delete click
        console.log("Delete button clicked");
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {isEditing && (
                    <EditUser userId={userId} onClose={handleEditUserClose} />
                )}
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
