import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './MyNavbar.module.scss';
import CommonButton from '../subComponents/CommonButton/CommonButton';
import { useNavigate } from 'react-router-dom';
const MyNavbar = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/other')
    }
    return (
        <>
            <Navbar expand="lg" className={style.navbar}>
                <Container style={{position:"relative"}}>
                    <Navbar.Brand href="#home" className={style.navbrand}>iCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={style.navul}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Locations</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Institutes</Nav.Link>
                            <Nav.Link href="#link">Partners</Nav.Link>
                          
                        </Nav>
                        <CommonButton w="150px" h="50px" br="43px" text="Apply Now" click={handleClick}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar