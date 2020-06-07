import React from 'react';

import SmartSlider from 'react-smart-slider';
import { withRouter } from 'react-router-dom';
const DummyCaption = ({ caption }) => (
	<div
		style={{
			position: 'absolute',
			right: 100,
			top: 250,
			fontSize: 38,
			color: 'white',
			padding: 55,
		}}>
		{caption}
	</div>
);

const ItemSlider = () => {
	const slidesArray = [
		{
			url: 'img/habesha/slide_one.png',

			// (Optional) Set if you want to add any content on your slide
			childrenElem: (
				<DummyCaption caption='Enjoy Ethiopian and Ertrian cusine' />
			),
		},
		{
			url: 'img/habesha/slide_two.jpeg',
			childrenElem: <DummyCaption caption='Best in town' />,
		},
		{
			url: 'img/habesha/slide_three.jpg',
			childrenElem: (
				<DummyCaption caption='Enjoy our Delicious VegCombo' />
			),
		},
		{
			url: 'img/habesha/slide_five.jpg',
			childrenElem: <DummyCaption caption='Caption 3' />,
		},
		{
			url: 'img/habesha/slide_four.jpg',
			childrenElem: <DummyCaption caption='Caption 3' />,
		},
	];
	return (
		<div className='Slide'>
			<SmartSlider
				autoSlide={true}
				slides={slidesArray}
				buttonShape='round ' // round or square
			/>
		</div>
	);
};
export default ItemSlider;
