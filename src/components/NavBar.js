import React from 'react';
import{Navbar,Container,Form,Button,FormControl}from 'react-bootstrap'
import { Rate } from 'antd';
import AddMovie from './AddMovie';
function NavBar({inputSearsh,setInputSearsh,StarSearsh, setStarSearsh ,add}) {

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Form className="d-flex">
                    <FormControl onChange={(e)=>setInputSearsh(e.target.value)}
                    value={inputSearsh}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success"> Search</Button>
                    <AddMovie add={add}/>
                </Form>
            </Container>
            </Navbar>
            <br/>
            <Rate allowHalf  defaultValue={StarSearsh} onChange={(e)=>setStarSearsh(e)} /> 
            <br/>
            <br/>
        </div>
    )
}

export default NavBar;

