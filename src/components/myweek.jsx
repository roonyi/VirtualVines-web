import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const MyWeek = (props) => {
    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="myweek-section">
                <Row className='myweek-row'>
                    <img src={props.myweek.logo} className="mwLogo" alt="mwLogo" />
                </Row>
                <Row className='myweek-row2'>
                    {/* <Col>
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
                    <Col>
                        <Row>
                            <img 
                                src={props.contact.pic1} 
                                alt="Partnership" 
                                className="contact-image"
                            />
                        </Row>
                    </Col> */}
                    <Carousel 
                            responsive={responsive}
                            infinite={true}
                            // autoPlay={true}
                            // autoPlaySpeed={3000}
                            arrows={true}
                            showDots={true}
                            // sliderClass={'carousel'}
                            containerClass={'carousel-container'}
                            dotListClass={'carousel-dotlist'}
                            // renderDotsOutside={true}
                            // removeArrowOnDeviceType={["desktop", "mobile", "tablet" ]}
                            removeArrowOnDeviceType={["superLargeDesktop","desktop"]}
                            >
                                {/* {
                                props.content?.products.component?.elements?.map((element) => {
                                let elementArray = [element];
                                return (<WebContent info={elementArray} alterClassHint={'card'}/>)
                                    })
                                } */}
                            <Card src={props.myweek.logo}/>
                            <Card src={props.myweek.logo}/>
                        </Carousel>
                </Row>
                <Row className='myweek-row3'>

                </Row>
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default MyWeek;