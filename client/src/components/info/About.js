import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<Fragment>
			<div className='about-section-box'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-sm-12'>
							<img
								src='img/habesha/about.jpg'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12 text-center'>
							<div className='inner-column'>
								<h1>
									Welcome To <span>Oasis Cafe</span>
								</h1>
								<h4>Little Story</h4>
								<p>
									Oasis Cafe prides itself in the quality and
									authenticity of its Eritrean and Ethiopian
									Cuisine. After a complete renovation of our
									kitchen in early 2014, we are now happy to
									offer a wide variety of entrees, all of
									which are completely customized to order.
									Coffee is ground and brewed by the cup, and
									customers are free to blend different roasts
									to create endless possible combinations of
									flavor.
								</p>
								<p></p>
								<Link
									className='btn btn-lg btn-circle btn-outline-new-white'
									to='/menu'>
									Explore our Menu
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
