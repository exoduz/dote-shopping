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

				</footer>
			</div>
		);
	}
}

export default App;
