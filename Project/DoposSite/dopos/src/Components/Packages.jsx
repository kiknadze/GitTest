import React from 'react';
import Btn from './Btn';

const Packages = (props) => (
    <section>
        <div id='packages'>
            <div id='packagesLeft'>
                <div id='packagesLeftItem1'>
                    <h3>Studio</h3>
                    <h2>Design Solutions <br />For Any Media.</h2>
                </div>
                <div id='packagesLeftItem2'>
                    <hr />
                    <h3>Suspended eget est at bendium<br />Suspended eget est at bendium</h3>
                    <Btn text='Learn More' icon='fa-caret-right'/>
                </div>
            </div>
            <div id='packagesright'>
            <div id='packagesright1'><img src='./Images/4.jpg' alt='No packages' /></div>
                <div id='packagesright2'><img src='./Images/3.jpg' alt='No packages' /></div>
                <div id='packagesright3'><img src='./Images/2.jpg' alt='No packages' /></div>
                <div id='packagesright4'><img src='./Images/1.jpg' alt='No packages' /></div>
            </div>
        </div>
    </section>
);

export default Packages;