import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const MyWeek = (props) => {
     // Constant for the Carousels
     const prevIcon = (
        <div style={{
          borderRadius: '50%', 
          padding: '10px',
          color: 'white'
        }}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </div>
      );
    const nextIcon = (
        <div style={{
          borderRadius: '50%', 
          padding: '10px',
          color: 'white'
        }}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      );

    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="myweek-section">
                <Row className='myweek-row'>
                    <img src={props.myweek.logo} className="mwLogo" alt="mwLogo" />
                </Row>
                <Row className='myweek-row2'>
                    <Col className="d-flex justify-content-center">
                        <div className="carousel-wrapper">
                            <Carousel 
                                slide={true}
                                interval={4000}
                                indicators={true}
                                controls={true}
                                prevIcon={prevIcon}
                                nextIcon={nextIcon}
                                prevLabel={""}
                                nextLabel={""}
                                className="corner-controls"
                            >
                                <Carousel.Item>
                                    <img 
                                        src={props.myweek.card1} 
                                        className="card-img" 
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        src={props.myweek.card2} 
                                        className="card-img" 
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