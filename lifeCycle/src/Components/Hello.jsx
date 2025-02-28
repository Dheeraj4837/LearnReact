import React, { Component } from 'react'

export default class Hello extends Component {
    componentWillUnmount(){
        console.log("Hello, I'm Unmount");
        
    }
  render() {
    return (
      <div>
        <h5>Hello</h5>
      </div>
    )
  }
}
