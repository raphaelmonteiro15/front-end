import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      texto:""
    }
  }

  render(){
    return (
        <div>
          <SearchBar onChangeInput = {term => this.doSomething(term) } />
          <div>{this.state.texto}</div>
        </div>
    );
  }

  doSomething(term){
    this.setState({texto:term})
  }
}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
