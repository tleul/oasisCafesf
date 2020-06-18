import React, { Fragment } from 'react';

import ItemSlider from './Slider';
import About from '../info/About';
import Qoute from '../info/Qt';

import Oasis from './Oasis';
const Home = () => {
	return (
		<Fragment>
			{' '}
			<div className='slides-container'>
				<Oasis />
				<ItemSlider />
				<About />
				<Qoute />
			</div>
		</Fragment>
	);
};

export default Home;
