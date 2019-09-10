import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    list:["Eric", "Abby", "Jake", "Logan", "Sean"],
    input:""
  }
  inputHandler(e){
    this.setState({input:e})
  }
  render(){
    let listItems = this.state.list.map((e, i)=>{
      if(e.toLowerCase().includes(this.state.input)){
        return <h2 key={i}>{e}</h2>
      }
    })
    return (
      <div className="App">
        <input value={this.state.input} placeholder="stuffs" onChange={(e)=>{this.inputHandler(e.target.value)}}/>
        {listItems}
      </div>
    );
  }
  }
  

export default App;
