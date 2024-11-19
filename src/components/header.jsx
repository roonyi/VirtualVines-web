// import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export const Header = (props) => {
    return(          
        <Container fluid>
            <Row style={{ display: 'flex', alignItems: 'center',  width: '100%' }}>
                <Col xs="auto" lg="2">
                    <img src={props.header.logo} className="vvLogo" alt="vvLogo" />
                </Col>
                <Col style={{ flexGrow: 1 }}>
                    <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <Link href="/" className="linkHeader">
                            Home
                        </Link>
                        <Link href="/products" className="linkHeader">
                            Products
                        </Link>
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