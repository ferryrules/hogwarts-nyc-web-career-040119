import React, { Component } from 'react';

export default class Hog extends Component {

	hogLis = this.props.hog.map(h=>{
		let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
		let medal = 'highest medal achieved'
    let hogPhoto = h.name.split(" ").join("_").toLowerCase()
		return (
      <div className="ui eight wide column movie-card card-front" key={h.name}>
        <img src={require(`../hog-imgs/${hogPhoto}.jpg`)} alt={h.name} />
        <h3>{h.name}</h3>
				<p>{h.specialty}</p>
				<p>{h.greased.toString()}</p>
				<p>{h[weight]}</p>
				<p>{h[medal]}</p>
      </div>
    )
	})

	render() {
		return (
			<div className="ui grid container" >
        {this.hogLis}
			</div>
		)
	}
}
