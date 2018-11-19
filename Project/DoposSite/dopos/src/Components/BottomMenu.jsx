import React from 'react';
import Menu from './Menu';

const BottomMenu = (props) => (
    <section>
        <div id='bottomMenu'>
            <div id='logobottom'>
                <h2>Dopos</h2>
            </div>
            <div id='bottomMenuItems'>
                <nav>
                    <Menu items={['HOME', 'PRODUCTS', 'AWARDS', 'CONTACT US']} />
                </nav>
            </div>
            <div id='social'>
                <i className="fab fa-facebook-messenger"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-vimeo-v"></i>
            </div>
        </div>
    </section>
);

export default BottomMenu;