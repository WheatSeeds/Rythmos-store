import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import '../../styles/index.css'
import ProductList from './ProductList.jsx';


function StorePage(){
    return(
        <>
            <Header />
            <main>
                <input type='text'></input>
                <ProductList />
            </main>
            <Footer />
        </>
    );
};

export default StorePage;