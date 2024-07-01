import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Section from './HomeSection.jsx'
import {HomePageContentData} from './HomePageContentData.js'

function HomePage() {
    return(
        <>
            <Header />
            <main>
                <div id="home-content">
                    <div id='content'>
                        <h1>{HomePageContentData.Title}</h1>
                        <div>{HomePageContentData.Content}</div>
                    </div>
                </div>
                <Section/>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;