import React, { Fragment } from 'react';

const Saladas = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>CALIFORNIA CHICKEN SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/one.jpg'
						className='img-fluid'
						alt='bagels'
					/>

					<div className='why-text'>
						<p>
							Salmon, Cream Cheese, Cucumber, Tomato, and Onions
						</p>
						<h5> $11.00</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>GREEK SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/three.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p></p>
						<h5> $9.50</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>CHICKEN CAESAR SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/five.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>Sed id magna vitae eros sagittis euismod.</p>
						<h5> $10.50</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>TUNA SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/two.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>BACON , HAM EGG AND CHEESE</p>
						<h5> $10.50</h5>
					</div>
				</div>
			</div>

			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>CAESAR SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/four.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>HUMMUS, CUCUMBER, TIMATOES, AND RED ONIONS </p>
						<h5> $7.50</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>GREEN SALAD</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/bagels/four.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>HUMMUS, CUCUMBER, TIMATOES, AND RED ONIONS </p>
						<h5> $7.50</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Saladas;
