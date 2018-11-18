import React, { Component } from 'react';

class Counter extends Component {
    state = {
            count: 0
    }

    componentDidMount(){
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount);

            if(!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }

    handleAddOne = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }) 
    }

    handleMinusOne = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        }) 
    }
    
    handleReset = () => {
        this.setState({
            count: 0
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Counter;