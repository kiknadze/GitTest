import React from 'react';
import Btn from './Btn';

const MainSlide = (props) => (
    <section>
            <div id='mainSlide'>
                <div id='mainSlideLeft'>
                    <div id='mainSlideLeftTitle'>
                        <h1>Creative Design <br /> & Advertising</h1>
                    </div>
                    <div id='mainSlideLeftDesc'>
                        <i className="fas fa-chart-bar"></i>
                        <h3>Proin pharetra volutpat est dictum. <br />
                            Cras pharetra molestie el laoret <br />
                            tortor accumsam quis.
                        </h3>
                    </div>
                    <Btn text='Learn More' icon='fa-caret-right'/>
                </div>
                <div id='mainSlideRight'>

                </div>
            </div>
        </section>
);

export default MainSlide;