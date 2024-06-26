import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Section from './HomeSection.jsx'
import '../../styles/index.css'
import '../../styles/homePageContent.css'
import {HomePageContentData} from './HomePageContentData.js'

const URL = 'https://api.reverb.com/api/shop/';
const TOKEN = 'c3321ba350c3a07d19a7e3cea1320653719f7496540172879aaa17ab898524ec';


function HomePage() {
    return(
        <>
            <Header />
            <main>
                <div id="content">
                    <h1>{HomePageContentData.Title}</h1>
                    <div>{HomePageContentData.Content}</div>
                    <button>Store</button>
                </div>
                <Section />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;