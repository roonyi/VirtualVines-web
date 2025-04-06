import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const MyWeek = (props) => {
     // Constant for the Carousels
     const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };

    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="myweek-section">
                <Row className='myweek-row'>
                    <img src={props.myweek.logo} className="mwLogo" alt="mwLogo" />
                </Row>
                <Row className='myweek-row2'>
                    <Col className="d-flex justify-content-center">
                        <div className="carousel-wrapper" style={{ maxWidth: '600px', width: '100%' }}>
                            <Carousel 
                                slide={true}
                                interval={3000}
                                controls={true}
                                indicators={true}
                            >
                                <Carousel.Item>
                                    <img 
                                        src={props.myweek.card1} 
                                        className="d-block w-100" 
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        src={props.myweek.card2} 
                                        className="d-block w-100" 
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row className='myweek-row3'>

                </Row>
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default MyWeek;