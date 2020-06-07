import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
} from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Contact from './components/info/Contact';
import Gallery from './components/Gallery';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Route path='/' component={Home} />
				<Fragment>
					<Switch>
						<Route path='/menu' component={Menu} />
						<Route path='/contact' component={Contact} />
						<Route path='/gallery' component={Gallery} />
					</Switch>
				</Fragment>
				<Footer />
			</Router>
		);
	}
}

export default App;
