import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const Buttonl = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <img className='w-25' src={props.dt.image} alt="" />
                        <Modal.Title className='ps-3'>{props.dt.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{props.dt.description}</p>
                        <div className='d-flex justify-content-between'>
                            <h5>{props.dt.rating.rate}</h5>
                            <h5>{props.dt.rating.count}</h5>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            
        </div>
    );
};

export default Buttonl;