///////////////////////////////////////
/*NUMBER EIGHT*/
///////////////////////////////////////

// import React, { Component } from 'react';
// import './App.css'
// import axios from 'axios';

// class App extends Component {
//   state = { 
//     characters : {}
//    }

//    componentDidMount(){
//      axios.get("https://swapi.co/api/people/1")
//      .then( res => {
//        const data = res.data
//        this.setState({characters: data})
//      })
//    }

//   render() { 
//     console.log(this.state)
//     return ( 
//       <div className="App">
//         <h1>The party is here</h1>
//       </div>
//      );
//   }
// }
 
// export default App;

// import React, { Component } from "react";

// import "./App.css";

// import axios from "axios";

// class App extends Component {
//   state = {
//     lukeSkywalker: ""
//   };
  

//   componentDidMount() {
//     axios.get('https://swapi.co/api/people/1/').then(response => {
//       this.setState({
//         lukeSkywalker: response.data
//       });
//     });
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div className="App">
//         <h1>Name: {this.state.lukeSkywalker.name}</h1>
//         <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
//         <h1>Height: {this.state.lukeSkywalker.height}</h1>
//         <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
//       </div>
//     );
//   }
// }

// export default App;


import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class App extends Component{
  state = {}
  render(){
    return(<div>
      <h1>Luke Skywalker</h1>
    </div>)
  }
}

export default App;
