import { Link } from "react-router-dom";
import '../../styles/header.css'
function Header() {
    return (
        <header>
            <nav>
                <div id='logo'>Rithmos</div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='store'>Store</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;