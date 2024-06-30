import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import ProductList from './ProductList.jsx';


function StorePage(){
    return(
        <>
            <Header />
            <main>
                <div id='store-content'>
                    <ProductList />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default StorePage;