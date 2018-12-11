import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SearchBox from './SearchBox'


 class App extends Component  {

    constructor(){
      super()
      this.state = {
        robots: robots,
        searchfield: ''
      }
    }

    onSearchChange = (e) => {
      // e.preventDefault();
      this.setState({ searchfield: e.target.value})
    }



  render (){

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log(filteredRobots);

    return (

      <div className = 'tc' >
        <h1> Robo Friends </h1>
        <SearchBox  searchChange = {this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }

}

export default App;
