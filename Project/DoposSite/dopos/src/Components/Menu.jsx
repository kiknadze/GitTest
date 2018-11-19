import React from 'react';

const Menu = (props) => (
    <nav>
        <ul>
            {props.items.map((item, i) =>  <li key={i}>{item}</li> )}
        </ul>
    </nav>
)

export default Menu;