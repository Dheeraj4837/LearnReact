import React, { Component } from 'react'
import Hello from './Components/hello';


export default class App extends Component {

  constructor(){
    super();
    console.log("Hello, I'm Constructor");
    this.state={
      count:0,
      count:100,
      h:true
    }
  }
  componentDidMount(){
    console.log("Hello, I'm Mount");
    
  }
  componentDidUpdate(p,s){

    console.log("Hello, I'm update");
    if(s.count!=this.state.count){
      console.log("Count Updated");
    }
  }

  render() {
    console.log("I'm Render");
    
    return (
      <div>App{this.state.count}
      <button onClick={()=>{
        this.setState({count:this.state.count+1})
      }}>Add</button>
      <br />
      <button onClick={()=>{
        this.setState({count2:this.state.count2+1})
      }}>Add2</button>

      {this.state.h && <Hello/>}
      <br />
      <button onClick={()=>{
        this.setState({h:!this.state.h})
      }}>Remove</button>
      </div>
    )
  }
}
