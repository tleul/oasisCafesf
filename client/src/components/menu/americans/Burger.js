import React, { Fragment } from 'react';

const Burgers = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>Cheese Burger</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/burgers/cheeseburger.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>Chicken Burger</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/burgers/chickenburger.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>salmon Burger</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/burgers/salmonburger.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>VEGGIE Burger</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/burgers/veggieburger.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Burgers;
