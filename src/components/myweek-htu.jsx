import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const MyWeekHTU = (props) => {

    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="myweek-section">
                <Row className='myweek-row'>
                    <NavLink 
                        to="/myweek" 
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={props.myweek.logo} className="mwLogo" alt="mwLogo" />
                    </NavLink>    
                </Row>
                <iframe 
                    src={props.myweek.htuPath}
                    width="100%"
                    height="800px"
                    style={{
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                    title="MyWeek How to Use"
                ></iframe>
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default MyWeekHTU;