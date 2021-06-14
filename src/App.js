import React from "react";

export default class App extends React.Component{
  
  state = {
      name: "Dandara", 
      counter: 0
    };

  handleClick = () => {
    const { name } = this.state;
    this.setState({ name: "Rhayssa" })
  }

  handleClickLink = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    const { name, counter } = this.state;

    return(
      <div>
       <h1 onClick={this.handleClick}>{name} {counter}</h1>
       <a onClick={this.handleClickLink} href="https://github.com/">Este é um link</a>
      </div>
    )
  }
}
