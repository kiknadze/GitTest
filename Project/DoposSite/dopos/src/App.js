import React, { Component } from 'react';
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
      <div>
        <Header handlePick={this.handlePick} />
        <MainSlide />
        <Packages />
        <Slide />
        <OurClients />
        <Blog />
        <BottomMenu />
        <Footer />
        <Login 
          loginOption={this.state.loginOption}
          handleCloseloginOption={this.handleCloseloginOption}
        />
      </div>
    );
  }
}

export default App;