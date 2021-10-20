import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "Carolina",
      sobrenome: "dos Santos"
    };
  }

  alterarNomeCompleto = () =>{
    this.setState({nome: "Carol"})
    this.setState({sobrenome: "Santos"})
  }

  render(){
    return(
      <div>
        <p>Nome: {this.state.nome}</p>
        <p>Sobrenome: {this.state.sobrenome}</p>
        <button onClick={this.alterarNomeCompleto}>Alterar</button>
      </div>
      
    );
  }
}

export default App;