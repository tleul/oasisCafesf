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
				{/* <br />
				<br />
				<br />
				<br />
				<br />
				<br /> */}
				<Oasis />
				<ItemSlider />
				<About />
				<Qoute />
			</div>
		</Fragment>
	);
};

export default Home;
