import { Container, Row, Col } from 'react-bootstrap';

export const Footer = (props) => {
    return(
        <Container fluid>
            <Row className="footer">
                <Col>
                    <h3 className="footerText">{props.footer.textFooter}</h3>
                </Col>
                <Col>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={props.footer.youtubeIcon} className="mediaIconsYoutube"/>
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <img src={props.footer.xIcon} className="mediaIconsX"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;