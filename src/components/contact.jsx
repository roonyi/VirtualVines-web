import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = (props) => {
    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="contact-section">
            <div className="content-wrapper">
                <Row>
                    <Col>
                        <Row className="justify-content-center position-relative">
                            <h1 className="hero-title">{props.contact.title}</h1>
                        </Row>
                        <Row className="justify-content-center position-relative">
                            <h4 className="hero-subtitle">{props.contact.subtitle}</h4>
                        </Row>
                        <Row className="justify-content-center position-relative">
                            <span className="contact-p">Sales email: <a href={`mailto:${props.contact.salesEmail}`} className="contact-e">{props.contact.salesEmail}</a></span>
                            <br></br>
                            <span className="contact-p">Support email: <a href={`mailto:${props.contact.supportEmail}`} className="contact-e">{props.contact.supportEmail}</a></span>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="image-wrapper">  
                <Row className="justify-content-center" style={{alignContent:'center'}}>
                    <Col xs={12} md={8} lg={6} className="text-center" >
                        <img 
                            src={props.contact.pic1} 
                            alt="Partnership" 
                            className="contact-image"
                        />
                    </Col>
                </Row>
            </div>
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default Contact;