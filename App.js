import React, { Component } from 'react';
import './App.css';
import Medium from './components/Medium';

class App extends Component {
  // Easy challenge
  constructor(props){
    super(props);
    this.state = {
      person:{
      name:"Alexia Lorenzana", 
      age:'22',
      dob:'12-29-1999'
}}}  // Medium challenge


  // Very Easy challenge
  render(){
return(
<div>
<Medium info = {this.state}/> 
</div>

  )
}
}
export default App;
