import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Oasis = () => {
	return (
		<div className='about-section-box'>
			<div className='oasis-top'>
				<img className='flag' src='img/eritrea-flag.jpg' alt='' />
				<img src='img/logo192.png' alt='' />
				<img className='flag' src='img/ehiopian-flag.jpg' alt='' />
				<h1>
					<strong>Eritrean and Ethiopian Cuisine</strong>{' '}
				</h1>
				<hr style={{ borderColor: 'yellow' }} />
				<h2>
					<strong>
						Every Day 6:00 am – 9:30 pm 901 Divisadero Street San
						Francisco, CA 94115 (415) 474-4900
					</strong>
				</h2>

				<Link to='https://www.yelp.com/biz/oasis-cafe-san-francisco-3'>
					yelp <i class='fab fa-yelp'></i>
				</Link>
			</div>
		</div>
	);
};

export default Oasis;
