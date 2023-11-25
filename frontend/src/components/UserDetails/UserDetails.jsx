import UserDetailsCard from "./UserDetailsCard";

export default function UserDetails({ onClose }) {
    // Mock data, replace with actual user data
    const user = {
        imageSrc: "path/to/user-avatar.jpg",
        fullName: "John Doe",
        username: "john_doe",
        email: "john.doe@example.com",
        bio: "Web Developer",
        shops: 3,
    };

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
                <UserDetailsCard
                    imageSrc={user.imageSrc}
                    fullName={user.fullName}
                    username={user.username}
                    email={user.email}
                    bio={user.bio}
                    shops={user.shops}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                />
            </div>
        </div>
    );
}
