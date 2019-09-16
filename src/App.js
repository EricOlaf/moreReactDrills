///////////////////////////////////////
/*NUMBER EIGHT*/
///////////////////////////////////////

import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class App extends Component{
  state = {
    myBoyLuke : {}
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/1/").then(res=> {
      this.setState({myBoyLuke: res.data})
    }
    )
  }
  render(){
    let {name, height, mass} = this.state.myBoyLuke;
    return(
    <div className="App">
      <h1>{name}</h1>
      <h3>{height}</h3>
      <h3>{mass}</h3>
    </div>
    )
  }
}

export default App;
