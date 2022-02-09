import React from 'react';
import {Button,Modal,Form} from 'react-bootstrap'
import { useState } from 'react';

function AddMovie({add}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Input,setInput]=useState({id:Math.random()})
        return (
            <>
            <Button variant="outline-success" onClick={handleShow}>
            Add Movie
            </Button>
    
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"onChange={(e)=>setInput({...Input,title:e.target.value})}/>
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setInput({...Input,rate:e.target.value})}/>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setInput({...Input,description:e.target.value})}/>
                        <Form.Label>PosterUrl</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setInput({...Input,posterUrl:e.target.value})}/>
                        <Form.Label>Trailer</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setInput({...Input,trailer:e.target.value})}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button >
                <Button variant="primary" onClick={()=>add(Input)}>ADD</Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }

export default AddMovie;
