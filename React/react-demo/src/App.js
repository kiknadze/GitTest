import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import VisibilityToggle from './components/VisibilityToggle';
import OptionModal from './components/OptionModal';

const Options = (props) => (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option} 
          handleDeleteOption={props.handleDeleteOption}
        />
        ))
      }
    </div>
  );

// class Options extends Component {

//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     )
//   }
// }

const Option = (props) => (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );

// class Option extends Component {
//   render(){
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     )
//   }
// }

const Action = (props) => (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
      What Should I do?
      </button>
    </div>
  );

// class Action extends Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//         What Should I do?
//         </button>
//       </div>
//     )
//   }
// }

class AddOption extends Component{
    state = {
      error: undefined
    };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState( () => ( { error } ))

    if(!error) {
      e.target.elements.option.value ='';
    }
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const User = (props) => (
    <div>
      <p>Name: {props.name} </p>
      <p>age: {props.age} </p>
    </div>
  );

const Layout = (props) => (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );

class App extends Component {
  state = {
      options: [],
      selectedOption: undefined
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {

    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount = () => {
    console.log('Component will unmount')
  }

  handleDeleteOptions = () => {
    this.setState( () => ( { options: [] } ) );
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter( (option) => optionToRemove !== option )
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(()=>({ selectedOption: undefined }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'this option already exist';
    } 

    this.setState((prevState) => ( { options: prevState.options.concat(option) } ));
  }

  render() {
    return (
      <div className="App">
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />

        <Counter />
        <VisibilityToggle />

        <User name='Temo' age='25'/>
        <Layout>
          <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
          </div>
          </Layout>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}


export default App;
