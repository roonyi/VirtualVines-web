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
                            {props.myweek.cards.map((imageName, index) => (
                                <Carousel.Item key={index}>
                                    <img 
                                    src={imageName} 
                                    className="card-img" 
                                    alt={`Slide ${index + 1}`}
                                    />
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                {/* Video */}
                <Row className='myweek-row3'>
                    <Col className="d-flex justify-content-center my-4">
                        <video 
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        // width="970"
                        className="myweek-video"
                        style={{ objectFit: 'cover' }}
                        ref={(el) => {
                          if (el) {
                              el.playbackRate = 2; // Increase speed (1.0 is normal, 2.0 is double speed)
                          }
                        }}
                        >
                        <source src={props.myweek.video} type="video/mp4" />
                        {/* Your browser does not support the video tag. */}
                        </video>
                    </Col>
                </Row>
                <Row>
                  <h3 className="feature-pricing-title">{props.myweek.installNowTitle}</h3>
                  <a href="https://auth.monday.com/oauth2/authorize?client_id=492bfc43babd4a7534a3e937fe2ba28b&response_type=install">
                    <img
                      alt="Add to monday.com"
                      height="32"
                      className='img-monday'
                      src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
                    />
                  </a>
                </Row>
                <Row className='pricing'>
                  <Col>
                    <h1 className="pricingTextbold">{props.myweek.pricingText1}</h1>
                    {/* <h2 className="footerText">{props.myweek.pricingText2}</h2>   */}
                    <h3 className="pricingText">{props.myweek.pricingText3}</h3>
                    <h3 className="pricingText">{props.myweek.pricingText4}</h3>
                  </Col>
                  <Col>
                    <div className="feature-card-doc">    
                      <h3 className="feature-pricing-text">{props.myweek.pricingTextCardTitle1}</h3>
                      <h1 className="feature-pricing-title">{props.myweek.pricingTextCardAmount1}</h1>
                      <h3 className="feature-pricing-text">{props.myweek.pricingTextCardTimeline1}</h3>
                      {/* <p className="feature-text">
                          pricingTextCardTitle1:'Full year',
                          pricingTextCardAmount1:'$7',
                          pricingTextCardTimeline1:'month (billed yearly)',
                      </p> */}
                    </div>
                  </Col>
                  <Col>
                    <div className="feature-card-doc">    
                      <h3 className="feature-pricing-text">{props.myweek.pricingTextCardTitle2}</h3>
                      <h1 className="feature-pricing-title">{props.myweek.pricingTextCardAmount2}</h1>
                      <h3 className="feature-pricing-text">{props.myweek.pricingTextCardTimeline2}</h3>
                      {/* <p className="feature-text">
                          pricingTextCardTitle1:'Full year',
                          pricingTextCardAmount1:'$7',
                          pricingTextCardTimeline1:'month (billed yearly)',
                      </p> */}
                    </div>
                  </Col>
                </Row>
                {/* Documentation */}
                <Container fluid className="features-section">
                  <Row className="justify-content-center g-4 features-section-row">
                      <Col lg={3}>
                        <a href="https://view.monday.com/5081062502-ce52274974268e83c8ca66013de75577?r=use1" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="feature-card-doc">    
                            <img 
                                src={props.myweek.pic1} 
                                alt="How to use" 
                                className="feature-image"
                            />
                          <h3 className="feature-title">{props.myweek.title1}</h3>
                            {/* <p className="feature-text">
                                {props.myweek.text1}
                            </p> */}
                          </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                        <a href="https://view.monday.com/8964716204-95b8f950bb30f8a4161dec389eb2f8d5?r=use1" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="feature-card-doc">
                              <img 
                                  src={props.myweek.pic2} 
                                  alt="Forward Thinking" 
                                  className="feature-image"
                              />
                              <h3 className="feature-title">{props.myweek.title2}</h3>
                              <p className="feature-text">
                                  {props.myweek.text2}
                              </p>
                          </div>
                        </a>  
                      </Col>

                      <Col lg={3}>
                        <a href="https://view.monday.com/3826151999-fd9d172809e2548360111dc8c9182e23?r=use1" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="feature-card-doc">
                              <img 
                                  src={props.myweek.pic3} 
                                  alt="Partnership" 
                                  className="feature-image"
                              />
                              <h3 className="feature-title">{props.myweek.title3}</h3>
                              <p className="feature-text">
                                  {props.myweek.text3}
                              </p>
                          </div>
                        </a>  
                      </Col>  
                  </Row>
                </Container> 
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default MyWeek;