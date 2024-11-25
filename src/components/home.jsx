import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row, Col } from 'react-bootstrap';

export const Home = (props) => {
    return(
        <>
            <Header header={props.header} className='header'/>
            
            <Container fluid className="hero-section position-relative overflow-hidden">
                {/* Left circular pattern */}
                <div className="background-pattern pattern-left">
                    <svg width="300" height="300" viewBox="0 0 300 300">
                        <g fill="none" stroke="#1FE7B8" strokeWidth="1" opacity="0.2">
                            {[...Array(15)].map((_, i) => (
                                <circle key={i} cx="150" cy="150" r={20 + (i * 10)} />
                            ))}
                        </g>
                    </svg>
                </div>

                {/* Option 3: Dots Grid */}
                <div className="background-pattern pattern-left">
                    <svg width="300" height="300" viewBox="0 0 300 300">
                        <g fill="#1FE7B8" opacity="0.2">
                            {[...Array(10)].map((_, row) => (
                                [...Array(10)].map((_, col) => (
                                    <circle
                                        key={`${row}-${col}`}
                                        cx={col * 30 + 15}
                                        cy={row * 30 + 15}
                                        r="2"
                                    />
                                ))
                            ))}
                        </g>
                    </svg>
                </div>

                {/* Option 2: Hexagon Grid */}
                <div className="background-pattern pattern-right">
                    <svg width="400" height="400" viewBox="0 0 400 400">
                        <g fill="none" stroke="#1FE7B8" strokeWidth="1" opacity="0.2">
                            {[...Array(5)].map((_, row) => (
                                [...Array(5)].map((_, col) => (
                                    <path
                                        key={`${row}-${col}`}
                                        d={`M ${col * 80 + 40} ${row * 70} l 40 0 l 20 35 l -20 35 l -40 0 l -20 -35 z`}
                                    />
                                ))
                            ))}
                        </g>
                    </svg>
                </div>

                <Row className="justify-content-center position-relative">
                    <h1 className="hero-title">{props.home.heroTitle}</h1>
                </Row>
                <Row className="justify-content-center position-relative">
                    <h4 className="hero-subtitle">{props.home.heroSubtitle}</h4>
                </Row>
            </Container>
            {/* Features Section */}
            <Container fluid className="features-section">
                <Row className="justify-content-center g-4 features-section-row">
                    <Col lg={4}>
                        <div className="feature-card">
                            <img 
                                src={props.home.pic1} 
                                alt="Team Meeting" 
                                className="feature-image"
                            />
                            <h3 className="feature-title">{props.home.title1}</h3>
                            <p className="feature-text">
                                {props.home.text1}
                            </p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="feature-card">
                            <img 
                                src={props.home.pic2} 
                                alt="Forward Thinking" 
                                className="feature-image"
                            />
                            <h3 className="feature-title">{props.home.title2}</h3>
                            <p className="feature-text">
                                {props.home.text2}
                            </p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="feature-card">
                            <img 
                                src={props.home.pic3} 
                                alt="Partnership" 
                                className="feature-image"
                            />
                            <h3 className="feature-title">{props.home.title3}</h3>
                            <p className="feature-text">
                                {props.home.text3}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default Home;