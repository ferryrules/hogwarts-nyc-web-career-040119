import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

export default class App extends Component {

  state = {
    sort: "",
    filter: false,
    hogs: [...hogs]
  }

  sortMe = (sort) => {
    console.log(sort);
  }

  filterMe = () => {
    let switchFilter = this.state.filter
    this.setState({
      ...this.state,
      filter: !switchFilter
    },console.log(this.state.filter))
  }

  render() {
    return (
      <div className="App">
          <Nav onSortChange={this.sortMe} onFilterChange={this.filterMe}/>
          <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}
