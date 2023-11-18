import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreateShop({ onClose }) {
    const handleFormClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Create Shop</h3>
                </div>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='email' placeholder='Name' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicUsername'>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type='text' placeholder='Type' />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='Description' />
                    </Form.Group>
                    <div className='form-btns'>
                        <Button variant='dark' type='submit'>
                            Submit
                        </Button>
                        <Button variant='dark' type='button' onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
