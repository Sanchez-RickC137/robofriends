// import React, { Component } from 'react';
import React from 'react';
import './card.css';

// class Card extends Component() {
// 	render() {
// 		return (
// 			<div>
// 				<img alt='robots' src="https://robohash.org/test" />
// 				<div>
// 					<h2>Jane Doe</h2>
// 					<p>jane.doe@gmail.com</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

const Card = ({ id, name, email }) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;