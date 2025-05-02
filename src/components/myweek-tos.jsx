import Header from './header.jsx'
import Footer from './footer.jsx'
import { Container} from 'react-bootstrap';

export const MyWeekTOS = (props) => {

    return(
        <>
            <Header header={props.header} className='header'/>
            <Container fluid className="myweek-section">
                <iframe 
                    src={props.myweek.tosPath}
                    width="100%"
                    height="800px"
                    style={{
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                    title="MyWeek Terms of Service"
                ></iframe>
            </Container>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default MyWeekTOS;