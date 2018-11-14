import React, { Component } from 'react';
import './App.css';

class Options extends Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll(){
    console.log(this.props.options)
  }

  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class Action extends Component {
  handlePick() {
    alert('s')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    )
  }
}

class AddOption extends Component{
  handleAddOption(e){
    e.preventDefault();
    if(e.target.option.value){
      alert(e.target.option.value)
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const options = ['One Thing', 'Two Thing', 'Four Thing']
    return (
      <div className="App">
        <Options options={options} />
        <Action />
        <AddOption />
      </div>
    );
  }
}

export default App;
