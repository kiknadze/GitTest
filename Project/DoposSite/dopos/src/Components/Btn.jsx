import React from 'react';

const  Btn = (props) => {
    return (
        <div id='btn'>
            {props.text} <i className={`fas ${props.icon}`}></i>
        </div>
        );
    };

export default Btn;