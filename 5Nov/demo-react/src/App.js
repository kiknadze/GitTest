import React, { Component } from 'react';
import './App.css';
import {api as API} from './configs/api'
import Photos from './components/Photos'
const URL = API.baseURL + API.photos;

class App extends Component {
  state = {
    data: null
  }

  componentDidMount(){
    fetch(URL)
      .then(data => data.json()
      .then(data => this.setState({data})))
  }

  render() {
    return (
      <div className="App">
        {
          (!!this.state.data && URL.endsWith(API.photos)) && <Photos length={5} data={this.state.data} />
        }
      </div>
    );
  }
}

export default App;
