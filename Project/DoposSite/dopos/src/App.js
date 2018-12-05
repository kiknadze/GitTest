import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slide from './Components/Slide'
import Header from './Components/Header'
import MainSlide from './Components/MainSlide'
import Packages from './Components/Packages'
import OurClients from './Components/OurClients';
import Blog from './Components/Blog';
import BottomMenu from './Components/BottomMenu';
import Footer from './Components/Footer';
import Login from './Components/Login';
import './App.css'


const Index = () => (
  <div>
    <Header/>
    <MainSlide />
    <Packages />
    <Slide />
    <OurClients />
    <Blog />
    <BottomMenu />
    <Footer />
    <Login />
  </div>
)

const PRODUCTS = () => (
  <div>
    <Header/>
    
    <OurClients />
    
    <Footer />
  </div>
)

const AWARDS = () => (
  <div>
    <Header />
    
    <Packages />
   
    <BottomMenu />
    <Footer />
    
  </div>
)

const CONTACTUS = () => (
  <div>
    <Header />
    <Footer />
  </div>
)

class App extends Component {
  state = {
    loginOption: undefined
  }

  handleCloseloginOption = () => {
    this.setState(()=>({ loginOption: false }))
  }

  handlePick = () => {
    this.setState(() => ({
      loginOption: true
    }))
  }

  render() {
    return (

      // <Header handlePick={this.handlePick} />
      // <MainSlide />
      // <Packages />
      // <Slide />
      // <OurClients />
      // <Blog />
      // <BottomMenu />
      // <Footer />
      // <Login 
      //   loginOption={this.state.loginOption}
      //   handleCloseloginOption={this.handleCloseloginOption}
      // />
      
      <Router>
        <div>
          <Route path="/" component={Index} exact />
          <Route path="/products" component={PRODUCTS} />
          <Route path="/awards" component={AWARDS} />
          <Route path="/contactus" component={CONTACTUS} />
        </div>
      </Router>
    );
  }
}

export default App;