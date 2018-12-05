import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header>
        <div id='logo'>
            <h2>Dopos</h2>
        </div>
        <div id='mainmenu'>
            <Menu items={[<Link to="/">HOME</Link>, <Link to="/products">PRODUCTS</Link>, <Link to="/awards">AWARDS</Link>, <Link to="/contactus">CONTACT US</Link>]} />
        </div>
        <div id='login'>
            <div id='loginText'>
                LOG IN
            </div>
            <div id='loginIcon' >
                <i className="fas fa-user-circle" onClick={props.handlePick}></i>
            </div>
        </div>
    </header>
)

export default Header;