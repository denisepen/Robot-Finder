import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


 class App extends Component  {

    constructor(){
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        robots: users
      }))
    }

    onSearchChange = (e) => {
      // e.preventDefault();
      this.setState({ searchfield: e.target.value})
      // console.log(this.state)
    }



  render (){

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log(filteredRobots);

    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return (

        <div className = 'tc' >
          <h1> Robot Finder </h1>
          <SearchBox  searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }

  }

}

export default App;
