///////////////////////////////////////
/*NUMBER SEVEN*/
///////////////////////////////////////

import React, {Component} from 'react';
import './App.css'

import AddTask from './Components/AddTask';
import List from './Components/List';

class App extends Component{
  state = {
    list: ['Eric', 'Abby']
  }

  addTask = (item) => {
    this.setState({list: [...this.state.list, item]})
  }

  render(){
    return(
      <div class='App'>
        <h1>Here we go</h1>
        <h2>More for the todo List</h2>
        <AddTask add={this.addTask}/>
        <List list={this.state.list}/>
      </div>
    )
  }
}

export default App;