import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer-area bg-f'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6'>
							<h3>About Us</h3>
							<p>
								Oasis Cafe prides itself in the quality and
								authenticity of its Eritrean and Ethiopian
								Cuisine. After a complete renovation of our
								kitchen in early 2014, we are now happy to offer
								a wide variety of entrees, all of which are
								completely customized to order. Coffee is ground
								and brewed by the cup, and customers are free to
								blend different roasts to create endless
								possible combinations of flavor.
							</p>
						</div>
						<div className='col-lg-3 col-md-6'>
							<h3>Opening hours</h3>
							<p>
								<span className='text-color'>Monday: </span>
								6:00 am – 9:30 pm
							</p>
							<p>
								<span className='text-color'>Tue-Wed :</span>{' '}
								6:00 am – 9:30 pm
							</p>
							<p>
								<span className='text-color'>Thu-Fri :</span>{' '}
								6:00 am – 9:30 pm
							</p>
							<p>
								<span className='text-color'>Sat-Sun :</span>{' '}
								6:00 am – 9:30 pm
							</p>
						</div>
						<div className='col-lg-3 col-md-6'>
							<h3>Contact information</h3>
							<p className='lead'>
								901 Divisadero Street San Francisco, CA 94115
							</p>
							<p className='lead'>
								<Link to='#'>(415) 474-4900</Link>
							</p>
							<p>
								<Link to='#'> info@admin.com</Link>
							</p>
						</div>
						<div className='col-lg-3 col-md-6'>
							<h3>Subscribe</h3>
							<div className='subscribe_form'>
								<form className='subscribe_form'>
									<input
										name='EMAIL'
										id='subs-email'
										className='form_input'
										placeholder='Email Address...'
										type='email'
									/>
									<button type='submit' className='submit'>
										SUBSCRIBE
									</button>
									<div className='clearfix'></div>
								</form>
							</div>
							<ul className='list-inline f-social'>
								<li className='list-inline-item'>
									<Link to='#'>
										<i
											className='fa fa-facebook'
											aria-hidden='true'></i>
									</Link>
								</li>
								<li className='list-inline-item'>
									<Link to='#'>
										<i
											className='fa fa-twitter'
											aria-hidden='true'></i>
									</Link>
								</li>
								<li className='list-inline-item'>
									<Link to='#'>
										<i
											className='fa fa-linkedin'
											aria-hidden='true'></i>
									</Link>
								</li>
								<li className='list-inline-item'>
									<Link to='#'>
										<i
											className='fa fa-google-plus'
											aria-hidden='true'></i>
									</Link>
								</li>
								<li className='list-inline-item'>
									<Link to='#'>
										<i
											className='fa fa-instagram'
											aria-hidden='true'></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='copyright'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<p className='company-name'>
									All Rights Reserved. &copy; 2020{' '}
									<Link to='/'>Oasis Cafe</Link> Design By :
									<Link to='/developer'>
										LeulT|contact developer
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<Link
				to='#'
				id='back-to-top'
				title='Back to top'
				style={{ display: 'none' }}>
				&uarr;
			</Link>
		</Fragment>
	);
};
export default Footer;
