import React, { Component } from 'react';
import Slider from './Slider';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Btn from './Btn';

class Slide extends Component {
  constructor(props){
    super(props)

    this.state = {
      images: [
        '/Images/Slide1.jpg',
        '/Images/Slide1.jpg',
        '/Images/Slide1.jpg',
        '/Images/Slide1.jpg',
        
      ],
      currentSlide: 0,
      translateValue: 0
    }

  }

  prevSlide = () => {
    if( this.state.currentSlide === 0 ) return;

    this.setState( prevState => {
      return {
        currentSlide: prevState.currentSlide - 1,
        translateValue: prevState.translateValue  + this.moveSlide() / this.props.slideCount,
      }
    })
  }

  moveSlide = () => {
    const translateValue = document.querySelector('.slider').clientWidth;
    return translateValue;
  }

  nextSlide = () => {
    if( (this.state.images.length - 1 )  === this.state.currentSlide ){
      return this.setState( {
        currentSlide: 0, 
        translateValue: 0,
      })
    }

    this.setState(  (prevState ) => {
      // state object
      return {
        currentSlide: prevState.currentSlide + 1,
        translateValue: prevState.translateValue + -(this.moveSlide()) / this.props.slideCount,
      }
    })

  }

  render() {
    return (
        <section>
            <div id='slidTop'>
                <div id='slidTopLeft'>
                    <h3>Studio</h3>
                    <h2>Making Ideas <br/>Come to Life.</h2>
                </div>
                <div id='slidTopright'>
                    01 / <sup> 09</sup>
                </div>
            </div>
            <div id='slidTop'>
                <div className="slider">
                    <div className="slider__container"
                        style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-in-out 0.45s',
                            width: `${ 100 / this.props.slideCount }%`
                        }}
                    >
                {
                    this.state.images.map( (image, index) => ( <Slider key={index} image={image} /> ) )
                }
                </div>

                <LeftArrow prevSlide={this.prevSlide} />
                <RightArrow nextSlide={this.nextSlide}/>

                </div>
            </div>
            <div id='slidBot'>
                <div id='slidBotLeft'>
                    <h3>
                        Curation trdes bhyr, lecture are desc sed, avlin ches<br/>
                        Bger trdes Chus, nakl saw htredf sed, elctur chees<br/>
                        Ceisarn knees bach, mychen is dess are.
                    </h3>
                    <Btn text='Learn More' icon=''/>
                </div>
                <div id='slidBotRight'>
                    <div id='catClient'>
                        <h3>CATEGORY</h3>
                        <h2>Design & <br/>Branding</h2>
                        <hr/>
                    </div>
                    <div id='catClient'>
                        <h3>CLIENT</h3>
                        <h2>Cusco<br/>Barista</h2>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

Slide.defaultProps = {
  loop: false,
  slideCount: 1
}


export default Slide;