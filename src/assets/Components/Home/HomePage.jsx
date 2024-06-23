import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import '../../styles/index.css'
import '../../styles/homePageContent.css'
import {HomePageContentData} from './HomePageContentData.js'

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
                <div className='content-block'>
                    <span>GUITARS</span>
                    <img src='../../../guitar.jpg'></img>
                </div>
                <div className='content-block'>
                    <span>SYNTHESIZERS</span>
                    <img src='../../../synth.jpg'></img>
                </div>
                <div className='content-block'>
                    <span>DRUMS</span>
                    <img src='../../../drums.jpg'></img></div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;