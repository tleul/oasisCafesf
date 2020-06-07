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
								style={{ height: 60, width: 100 }}
								src='img/logo192.png'
								alt=''
							/>
						</Link>
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
									<Link className='nav-link' to='/setup'>
										Setup
									</Link>
								</li>
								<li className='nav-item dropdown'>
									<Link
										className='nav-link dropdown-toggle'
										to='#'
										id='dropdown-a'
										data-toggle='dropdown'>
										Pages
									</Link>
									<div
										className='dropdown-menu'
										aria-labelledby='dropdown-a'>
										<Link
											className='dropdown-item'
											to='/menuone'>
											Menu One
										</Link>
										<Link
											className='dropdown-item'
											to='/menutwo'>
											Menu Two
										</Link>
										<Link
											className='dropdown-item'
											to='gallery.html'>
											Gallery
										</Link>
									</div>
								</li>
								<li className='nav-item dropdown'>
									<Link
										className='nav-link dropdown-toggle'
										to='#'
										id='dropdown-a'
										data-toggle='dropdown'>
										Blog
									</Link>
									<div
										className='dropdown-menu'
										aria-labelledby='dropdown-a'>
										<Link
											className='dropdown-item'
											to='blog.html'>
											blog
										</Link>
										<Link
											className='dropdown-item'
											to='blog-details.html'>
											blog Single
										</Link>
									</div>
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
