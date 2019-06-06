import React, { Component } from 'react';
import piggy from '../porco.png'

export default class Nav extends Component {

	handleSort = (e) => {
		e.preventDefault()
		console.log(e.target);
		this.props.onSortChange(e.target.value)
	}

	handleClick = (e) => {
		console.log(e.target);
		this.props.onFilterChange()
	}

	render() {
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<select onChange={this.handleSort}>
					<option>Select</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
				<button onClick={this.handleClick}>Filter Greased Hogs</button>
			</div>
		)
	}
}
