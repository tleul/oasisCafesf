import React, { Fragment } from 'react';

const Omeletes = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>DIVISADERO TREAT</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/omlets/italian.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>
							3 Eggs, Chicken Italian Sausage, Cheese, and Red
							Bell Peppers{' '}
						</p>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>

			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>VEGGIE OMELETTE</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/omlets/veggie.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>
							3 Eggs, Mushrooms, Tomatoes, Red Onions, Jalapeños,
							and Spinach
						</p>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>

			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>THE OASIS</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/omlets/one.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>3 Eggs, Ham, Cheese, Onions, and Jalapeños</p>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Omeletes;
