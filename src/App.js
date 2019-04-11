import React, { Component } from 'react';

import Card from './components/card';
import logo from './images/dote_logo.png';
import { data } from './data/data-stub';

import './styles/App.css';

class App extends Component {
	componentWillMount() {

	}

	render() {
		console.log( 'data', data );

		return (
			<div className="wrapper">
				<header>
					<a href="https://doteshopping.com" target="_blank" rel="noopener noreferrer">
						<img src={ logo } alt="Dote Logo" />
					</a>
				</header>

				<div className="content">
					{ data.items && data.items.map( item => {
						return <Card key={ `item-${ item.id }` } data={ item } />
					} ) }
				</div>

				<footer>
					Coded by <a href="https://robinjulius.com" target="_blank" rel="noopener noreferrer">Robin Julius</a> for <a href="https://doteshopping.com" target="_blank" rel="noopener noreferrer">Dote Shopping, Inc</a>.
				</footer>
			</div>
		);
	}
}

export default App;
