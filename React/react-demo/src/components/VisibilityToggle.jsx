import React, { Component } from 'react';

class VisibilityToggle extends Component {
   state = {
            visibility: false
    }

    handleToggleVisibility = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can see!</p>
                    </div>
                )}
            </div>
        )
    }
}

export default VisibilityToggle;