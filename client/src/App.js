import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Contact from './components/info/Contact';
import Gallery from './components/Gallery';
import About from './components/info/About';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Fragment>
					<Switch>
						<Route exact path='/menu' component={Menu} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/gallery' component={Gallery} />
						<Route exact path='/about' component={About} />
					</Switch>
				</Fragment>
				<Footer />
			</Router>
		);
	}
}

export default App;
