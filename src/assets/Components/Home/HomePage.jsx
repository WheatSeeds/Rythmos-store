import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Section from './HomeSection.jsx'
import '../../styles/index.css'
import '../../styles/homePageContent.css'
import {HomePageContentData} from './HomePageContentData.js'
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <>
            <Header />
            <main>
                <div id="content">
                    <h1>{HomePageContentData.Title}</h1>
                    <div>{HomePageContentData.Content}</div>
                    <Link to='/store?category=all-products'><button>Store</button></Link>
                </div>
                <Section/>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;