import React, { Fragment } from 'react';

const Sandwitches = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<h4>CHICKEN MALIBU</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/sandwitches/chickenmalibu.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>
							Chicken, Ham, Bacon, Lettuce, Tomato, Pickle, and
							Onions
						</p>
						<h5> $12.50</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				{' '}
				<h4>TUNA MELT </h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/sandwitches/melttuna.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>Tuna, Lettuce, Tomatoes, Pickles, and Onions</p>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				{' '}
				<h4>CARNIVORE</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/sandwitches/one.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>
							Pastrami, Chicken Sausage, Lettuce, Tomatoes,
							Pickles, and Onions
						</p>
						<h5> $11.99</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				{' '}
				<h4>CAPRESE</h4>
				<div className='gallery-single fix'>
					<img
						src='img/american/sandwitches/pesto.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<p>
							Pesto Sauce, Mozzarella Cheese, Tomatoes, and
							Onions, on Sourdough Bread
						</p>
						<h5> $10.99</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Sandwitches;
