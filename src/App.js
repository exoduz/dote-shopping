import React, { Component } from 'react';

import logo from './images/dote_logo.png';

import './styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<header>
					<img src={ logo } alt="Dote Logo" />
				</header>

				<div className="content">
				</div>

				<footer>
					Coded by <a href="https://robinjulius.com" target="_blank">Robin Julius</a> for <a href="https://doteshopping.com" target="_blank">Dote Shopping, Inc</a>.
				</footer>
			</div>
		);
	}
}

export default App;
