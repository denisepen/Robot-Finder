import React, { Component } from 'react';


// build component as an object
 // export default class Hello extends Component {
 //   render(){
 //     return (
 //       <div>
 //        <h1>Hello World </h1>
 //        <p>{this.props.greeting}</p>
 //        </div>
 //     )
 //   }
 // }

// or as a function
const Hello = (props) => {
return (
  <div >
    <h1>Hello World </h1>
    <p>{props.greeting}</p>
  </div>
  )
}

export default Hello
