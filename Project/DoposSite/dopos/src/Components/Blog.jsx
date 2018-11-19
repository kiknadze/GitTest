import React from 'react';
import Btn from './Btn';

const Blog = (props) => (
    <section>
        <div id='blog'>
            <div id='blogLeft'>
                <h4>INSIGHTS</h4>
                <h2>Latest<br/>Blog Posts</h2>
                <hr/>
                <h3>Subscribe To recieve<br/>free emails updates</h3>
                <h5>Quisque ut quis saggittis!</h5>
                <input type='text' id='blogemail' placeholder='Enter Your Email' />
                <Btn text='Learn More' icon='fa-caret-right'/>
            </div>
            <div id='blogMiddle'>
                <h4>01</h4>
                <h2>While other Talks We Listen.</h2>
                <h5>Oct. 16, 2018</h5>
                <h5>Quisque ut quis saggittis! Quisque ut quis saggittis! Quisque ut quis saggittis! 
                    Quisque ut quis saggittis! Quisque ut quis saggittis! Quisque ut quis saggittis! 
                </h5>
                <hr/>
                <h3>Read Full Article</h3>
            </div>
            <div id='blogright'>
                <i className="fas fa-chevron-circle-right"></i>
                <i className="fas fa-chevron-circle-left"></i>
            </div>
        </div>
    </section>
);

export default Blog;