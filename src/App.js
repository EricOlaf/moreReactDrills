///////////////////////////////////////
/*NUMBER THREE*/
///////////////////////////////////////

// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   state={
//     list:["Eric", "Abby", "Jake", "Logan", "Sean"],
//     input:""
//   }
//   inputHandler(e){
//     this.setState({input:e})
//   }
//   render(){
//     let listItems = this.state.list.map((e, i)=>{
//       if(e.toLowerCase().includes(this.state.input)){
//         return <h2 key={i}>{e}</h2>
//       }
//     })
//     return (
//       <div className="App">
//         <input value={this.state.input} placeholder="stuffs" onChange={(e)=>{this.inputHandler(e.target.value)}}/>
//         {listItems}
//       </div>
//     );
//   }
//   }
  

// export default App;



///////////////////////////////////////
/*NUMBER FOUR*/
///////////////////////////////////////

import React, {Component} from 'react';
import './App.css'

class App extends Component{
  state={
    name:"",
    pass:""
  }

  clickHandler = () => {
    alert(`Your name is: ${this.state.name} and your password is: ${this.state.pass}`)
  }

  render(){
    let {name, pass} = this.state
    console.log(this.state)
    return(
      <div className="App">
        <input value={name} placeholder="name" onChange={(e) => {this.setState({name:e.target.value})}}></input>
        <input value={pass} placeholder="password" onChange={(f) => {this.setState({pass:f.target.value})}}></input>
        <button onClick={()=>{this.clickHandler()}}>SUBMIT</button>
      </div>
    )
  }
}
export default App;