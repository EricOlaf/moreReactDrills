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

// import React, {Component} from 'react';
// import './App.css'

// class App extends Component{
//   state={
//     name:"",
//     pass:""
//   }

//   clickHandler = () => {
//     alert(`Your name is: ${this.state.name} and your password is: ${this.state.pass}`)
//   }

//   render(){
//     let {name, pass} = this.state
//     console.log(this.state)
//     return(
//       <div className="App">
//         <input value={name} placeholder="name" onChange={(e) => {this.setState({name:e.target.value})}}></input>
//         <input value={pass} placeholder="password" onChange={(f) => {this.setState({pass:f.target.value})}}></input>
//         <button onClick={()=>{this.clickHandler()}}>SUBMIT</button>
//       </div>
//     )
//   }
// }
// export default App;

///////////////////////////////////////
/*NUMBER FIVE*/
///////////////////////////////////////

// import React, {Component} from 'react';
// import "./App.css"
// import Image from "./Image/Image.js"

// class App extends Component {
//   state = {
//       cats: "https://res.cloudinary.com/rawtrails801/image/upload/v1540407718/UNADJUSTEDNONRAW_thumb_1571.jpg"
//   }

//   render(){
//     return(
//       <div className="App">
//         <Image catImage={this.state.cats}/>
//       </div>
//     )
//   }
// }
// export default App;

///////////////////////////////////////
/*NUMBER SIX*/
///////////////////////////////////////

// import React, {Component} from 'react';
// import "./App.css";
// import "./TodoList.js"

// class App extends Component {
//   state = {
//     list: ["cook", "clean", "lift", "buy gift"],
//     userInput: ""
//   }

//   inputHandler = (val) => {
//     this.setState({userInput: val})
//   }

//   clickHandler = () => {
//     let {userInput, list} = this.state
//     this.setState({list: [userInput, ...list], userInput:""})
//   }

//   render(){
//     let listItem = this.state.list.map((e, i)=>{
//       return<p key={i}>{e}</p>
//       // return <TodoList item={e} key={i}/>
//     })
//     return(
//       <div className="App">
//         <h1>My todo list</h1>
//         <input type="text" value={this.state.userInput} placeholder="New Chore" onChange={(e) => {this.inputHandler(e.target.value)}}/>
//         <button onClick={this.clickHandler}>SUBMIT</button>
//         {listItem}
//       </div>
//     )
//   }
// }
// export default App;

///////////////////////////////////////
/*NUMBER SEVEN*/
///////////////////////////////////////

// import React, {Component} from 'react';
// import './App.css'

// import AddTask from './Components/AddTask';
// import List from './Components/List';

// class App extends Component{
//   state = {
//     list: ['Eric', 'Abby']
//   }

//   addTask = (item) => {
//     this.setState({list: [...this.state.list, item]})
//   }

//   render(){
//     return(
//       <div class='App'>
//         <h1>Here we go</h1>
//         <h2>More for the todo List</h2>
//         <AddTask add={this.addTask}/>
//         <List list={this.state.list}/>
//       </div>
//     )
//   }
// }

// export default App;


///////////////////////////////////////
/*NUMBER EIGHT*/
///////////////////////////////////////

// import React, {Component} from 'react'
// import axios from 'axios'
// import './App.css'

// class App extends Component{
//   state = {
//     myBoyLuke : {}
//   }
//   componentDidMount(){
//     axios.get("https://swapi.co/api/people/1/").then(res=> {
//       this.setState({myBoyLuke: res.data})
//     }
//     )
//   }
//   render(){
//     let {name, height, mass} = this.state.myBoyLuke;
//     return(
//     <div className="App">
//       <h1>{name}</h1>
//       <h3>{height}</h3>
//       <h3>{mass}</h3>
//     </div>
//     )
//   }
// }

// export default App;
