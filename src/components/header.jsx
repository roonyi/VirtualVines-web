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
            <Row style={{ display: 'flex', alignItems: 'center',  width: '100%' }}>
                <Col xs="auto" lg="2">
                    <img src={props.header.logo} className="vvLogo" alt="vvLogo" />
                </Col>
                <Col style={{ flexGrow: 1 }}>
                    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
                        <Link href="/" className="linkHeader">
                            Home
                        </Link>
                        <div style={{ position: 'relative' }}>
                            <span onClick={toggleDropdown} className="linkHeader" style={{ cursor: 'pointer' }}>
                                Products
                            </span>
                            {dropdownOpen && (
                                <div style={{ position: 'absolute', backgroundColor: '#1FE7B8', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 1 }}>
                                    <Link to="/myweek" className="dropdownItem">MyWeek</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/contact" className="linkHeader">
                            Contact
                        </Link>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;