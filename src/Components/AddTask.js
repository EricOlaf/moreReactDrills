import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        input: ''
     }

    clickHandler = () => {
        console.log(this.state.input)
        this.props.add(this.state.input);
        this.setState({input: ''})
        
        
    }

    render() { 
        
        return ( 
        <div>
            <input value={this.state.input} placeholder="Enter new name" onChange={(e)=>{this.setState({input:e.target.value})}}></input>
            <button onClick={this.clickHandler}>SUBMIT</button>
        </div> );
    }
}
 
export default AddTask;