import React from "react";

export default class App extends React.Component{
  state = {
    nome: "Dandara",
    idade: 11,
    cor: "azul"
  }
 handleClick = () => {
  let nomeAtual = this.state.nome === "Dandara" ? "Rhayssa Dandara" : "Dandara" 
  this.setState({
    nome: nomeAtual
  })
}

  render() {
    return(
      <div>
       <h1>{this.state.nome}</h1>
       <button onClick={this.handleClick}>Clica aqui</button>
      </div>
    )
  }
}
