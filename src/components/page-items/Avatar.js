import React, {Component, useState} from 'react'

class AvatarReveal extends Component{
    state= { isClicked: false };
    handleClick = () => {
        // Sets state value of isClicked to false to switch between hamburger icon and 'x'. 
        this.setState({isClicked : !this.state.isClicked})
    }

    toggleVisibility() {
        this.setState(state => {
          if (state.visibility === true) {
             return { visibility: false };
           } else {
             return { visibility: true };
          }
        });
      }
      render() {
        if (this.state.visibility) {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
              <h1>Now you see me!</h1>
            </div>
          );
        } else {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
          );
        }
      }
};

export default AvatarReveal;