import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
			<header className='top-navbar'>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container'>
						<Link className='navbar-brand' to='/'>
							<img
								style={{ height: 15, width: 30 }}
								src='img/ehiopian-flag.jpg'
								alt=''
							/>
							<img
								style={{ height: 100, width: 100 }}
								src='img/logo192.png'
								alt=''
							/>
							<img
								style={{ height: 15, width: 30 }}
								src='img/eritrea-flag.jpg'
								alt=''
							/>
						</Link>

						<br />
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbars-rs-food'
							aria-controls='navbars-rs-food'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbars-rs-food'>
							<ul className='navbar-nav ml-auto'>
								<li className='nav-item'>
									<Link className='nav-link' to='/'>
										Home
									</Link>
								</li>
								<li className='nav-item '>
									<Link className='nav-link' to='/menu'>
										Menu
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/about'>
										About
									</Link>
								</li>

								<li className='nav-item'>
									<Link className='nav-link' to='/contact'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Navbar;
