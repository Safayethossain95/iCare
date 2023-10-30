import React,{useEffect,useState} from 'react'
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
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
    
        if (element) {
          const navbarHeight = document.getElementById('navbar').offsetHeight;
          const elementPosition = element.offsetTop - navbarHeight;
    
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      };
    return (
        <>
        <div>
        {isSticky && <div style={{ height: '80px' }}></div>}
            <Navbar id="navbar" expand="lg" className={isSticky ? 'sticky' : ''}>
                <Container className={style.container} style={{position:"relative"}}>
                    <Navbar.Brand href="#home" className={style.navbrand}>iCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={style.navul}>
                            <Nav.Link onClick={() => scrollToSection('header')} href="#">Home</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('aboutus')} href="#">About</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('location')} href="#">Locations</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('service')}  href="#">Services</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('institutes')} href="#">Institutes</Nav.Link>
                            
                          
                        </Nav>
                        <div className="desktop">
                        <CommonButton w="150px" h="50px" br="43px" text="Apply Now" click={handleClick}/>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    )
}

export default MyNavbar