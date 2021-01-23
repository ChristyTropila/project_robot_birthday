import React from "react"
import CardList from "./CardList"
import {robots} from "./robots"
import SearchBox from "./SearchBox.js"
import "./App.css"


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }


    onSearchChange =(evt) => {
        this.setState({
            searchField: evt.target.value
        })
    }
    
  render(){
      const filteredRobots= this.state.robots.filter((robots) =>{
          return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
    return(
        <div className="tc">
          <h1 className="f-subheadline lh-title">Level Thirty Unlocked</h1>
          <h2 className="f1">The Crew</h2>
          <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots}/>
        </div>
    )
}
}

export default App