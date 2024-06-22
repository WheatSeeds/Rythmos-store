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
            </main>
            <Footer />
        </>
    );
};

export default HomePage;