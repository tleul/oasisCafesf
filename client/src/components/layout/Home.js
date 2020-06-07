import React, { Fragment } from 'react';

import ItemSlider from './Slider';
import About from '../info/About';
import Qoute from '../info/Qt';
const Home = () => {
	return (
		<Fragment>
			{' '}
			<div className='slides-container'>
				<ItemSlider />
				<About />
				<Qoute />
			</div>
		</Fragment>
	);
};

export default Home;
