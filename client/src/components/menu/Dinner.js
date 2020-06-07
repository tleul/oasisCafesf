import React, { Fragment } from 'react';

const Dinner = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<div className='gallery-single fix'>
					<img
						src='dinnerImages/img-07.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h4>Special Dinner 1</h4>
						<p>Sed id magna vitae eros sagittis euismod.</p>
						<h5> $25.79</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<div className='gallery-single fix'>
					<img
						src='dinnerImages/img-08.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h4>Special Dinner 2</h4>
						<p>Sed id magna vitae eros sagittis euismod.</p>
						<h5> $22.79</h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid dinner'>
				<div className='gallery-single fix'>
					<img
						src='dinnerImages/img-09.jpg'
						className='img-fluid'
						alt='dinnerImage'
					/>
					<div className='why-text'>
						<h4>Special Dinner 3</h4>
						<p>Sed id magna vitae eros sagittis euismod.</p>
						<h5> $24.79</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Dinner;
