import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function UserDetailsCard({
    imageSrc,
    username,
    email,
    onEditClick,
    onDeleteClick,
}) {
    return (
        <Card style={{ width: "22rem" }}>
            <Card.Img variant='top' src={imageSrc} alt='User Avatar' />
            <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>
                    @{username}
                </Card.Subtitle>
                <Card.Text>Email: {email}</Card.Text>
                <Button variant='primary' onClick={onEditClick}>
                    Edit
                </Button>
                <Button
                    variant='danger'
                    onClick={onDeleteClick}
                    className='ms-2'
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
}
