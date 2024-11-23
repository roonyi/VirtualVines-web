import Header from './header.jsx'
import Footer from './footer.jsx'

export const Contact = (props) => {
    return(
        <>
            <Header header={props.header} className='header'/>
            <Footer footer={props.footer} className='footer'/>
        </>
    );
}

export default Contact;