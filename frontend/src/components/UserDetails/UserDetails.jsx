import { useState, useEffect } from "react";

import * as userService from "../../services/userService";
import "./UserDetails.css";

import UserDetailsCard from "./UserDetailsCard";
import EditUser from "../EditUser/EditUser";
import DeleteUser from "../DeleteUser/DeleteUser";

export default function UserDetails({ onClose, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        userService
            .getOne(userId)
            .then((response) => {
                const userData = response[userId];
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

        if (userId) {
            try {
                const response = await userService.getOne(userId);
                const userData = response[userId];

                if (userData) {
                    setUser(userData);
                } else {
                    console.error("User not found for userId:", userId);
                }
            } catch (error) {
                console.error(
                    "Error fetching updated user details:",
                    error.message
                );
            }
        }
    };

    const handleDeleteClick = () => {
        setIsDeleting(true);
    };

    const handleDeleteUserClose = () => {
        setIsDeleting(false);
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {isEditing && (
                    <EditUser userId={userId} onClose={handleEditUserClose} />
                )}
                {isDeleting && (
                    <DeleteUser
                        userId={userId}
                        onClose={handleDeleteUserClose}
                        onDelete={onDelete}
                    />
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
