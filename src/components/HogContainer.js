import React, { Component } from 'react';
import Hog from './Hog.js'

export default class HogContainer extends Component {

	render() {
		return (
      <Hog hog={this.props.hogs} />
		)
	}
}
