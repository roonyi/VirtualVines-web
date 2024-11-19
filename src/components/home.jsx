import Header from './header.jsx'


export const Home = (props) => {
    return(
        <Header header={props.header} className='header'/>
    );
}

export default Home;