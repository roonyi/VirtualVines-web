import { useState } from 'react'; // Import useState for managing dropdown state
import { NavLink, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
    const location = useLocation(); // Get current location
    const [activeLink, setActiveLink] = useState('/');

    // Check if current route is part of Products section
    const isProductsActive = location.pathname === '/myweek' || activeLink === 'products';

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };

    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the active link
        setDropdownOpen(false); // Close dropdown on link click
    };

    return(          
        <Container fluid>
            <Row className="header">
                <Col>
                    <img src={props.header.logo} className="vvLogo" alt="vvLogo" />
                </Col>
                <Col>
                    <nav className="navHeader">
                        <Col>
                            <NavLink to="/"
                            className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}
                            onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </NavLink>
                        </Col>
                        <Col>
                            <span onClick={()=> {
                                handleLinkClick('products');
                                toggleDropdown();}} 
                                className={`linkButton ${isProductsActive ? 'activeLink' : ''}`} 
                                style={{ cursor: 'pointer' }}
                                >
                                Products
                            </span>
                            {dropdownOpen && (
                                <div style={{ position: 'absolute', backgroundColor: '#1FE7B8', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 1 }}>
                                    <NavLink to="/myweek" 
                                    // className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}
                                    className={({ isActive }) => isActive ? "dropdownItem activeLink" : "dropdownItem"}
                                    onClick={() => handleLinkClick('products')}
                                    >MyWeek</NavLink>
                                </div>
                            )}
                        </Col>
                        <Col>
                            <NavLink to="/contact" 
                            className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}
                            onClick={() => handleLinkClick('/contact')}
                            >
                                Contact
                            </NavLink>
                        </Col>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;