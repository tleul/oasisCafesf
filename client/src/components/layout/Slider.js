import React from 'react';

import SmartSlider from 'react-smart-slider';

const DummyCaption = ({ caption }) => (
	<div
		style={{
			position: 'absolute',
			right: 100,
			top: 250,

			fontSize: 50,
			color: '#88A550 ',
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
			childrenElem: <DummyCaption caption='' />,
		},
		{
			url: 'img/habesha/slide_two.jpeg',
			childrenElem: <DummyCaption caption='' />,
		},
		{
			url: 'img/habesha/slide_three.jpg',
			childrenElem: <DummyCaption caption='  ' />,
		},
		{
			url: 'img/habesha/slide_five.jpg',
			childrenElem: <DummyCaption caption=' ' />,
		},
		{
			url: 'img/habesha/slide_four.jpg',
			childrenElem: <DummyCaption caption=' ' />,
		},
	];
	return (
		<div style={{}} className='slide'>
			<SmartSlider
				autoSlide={true}
				slides={slidesArray}
				buttonShape='round ' // round or square
			/>
		</div>
	);
};
export default ItemSlider;
