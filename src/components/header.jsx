import { useState } from 'react'; // Import useState for managing dropdown state
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
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
                            <Link to="/" className="linkButton">
                                Home
                            </Link>
                        </Col>
                        <Col>
                            <span onClick={toggleDropdown} className="linkButton" style={{ cursor: 'pointer' }}>
                                Products
                            </span>
                            {dropdownOpen && (
                                <div style={{ position: 'absolute', backgroundColor: '#1FE7B8', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 1 }}>
                                    <Link to="/myweek" className="dropdownItem">MyWeek</Link>
                                </div>
                            )}
                        </Col>
                        <Col>
                            <Link to="/contact" className="linkButton">
                                Contact
                            </Link>
                        </Col>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;