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
                    <h1 className="hero-title">We Empower<br/>Businesses</h1>
                </Row>
                <Row className="justify-content-center position-relative">
                    <h4 className="hero-subtitle">We build Micro SaaS Solutions</h4>
                </Row>
            </Container>
            <Container  className="hero-section">
                <Row className="justify-content-center">
                    <h1 className="hero-title">We Empower Businesses</h1>
                </Row>
            </Container>

            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default Home;