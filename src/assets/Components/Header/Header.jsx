import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <nav>
                <div id='logo'><Link to='/'>Rithmos</Link></div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/store?category=all-products'>Store</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;