import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Section from './HomeSection.jsx'

const HomePageContentData = {
    Title: "Rithmos Store",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

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