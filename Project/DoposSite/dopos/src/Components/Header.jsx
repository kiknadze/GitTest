import React from 'react';
import Menu from './Menu';

const Header = (props) => (
    <header>
        <div id='logo'>
            <h2>Dopos</h2>
        </div>
        <div id='mainmenu'>
            <Menu items={['HOME', 'PRODUCTS', 'AWARDS', 'CONTACT US']} />
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