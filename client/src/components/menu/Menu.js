import React, { Fragment, useState } from 'react';
import Drinks from './Drinks';

import Lunch from './Lunch';
import Dinner from './Dinner';

import Starters from './Starters';

const Menu = () => {
	const [menuType, setMenutype] = useState({
		menu: 'all',
	});
	const all = () => {
		if (menuType.menu !== 'all') {
			setMenutype({ menu: 'all' });
		} else if (menuType.menu === 'all') {
			return;
		}
	};
	const dinner = () => {
		if (menuType.menu !== 'dinner') {
			setMenutype({ menu: 'dinner' });
		} else if (menuType.menu === 'dinner') {
			return;
		}
	};
	const drinks = () => {
		if (menuType.menu !== 'drinks') {
			setMenutype({ menu: 'drinks' });
		} else if (menuType.menu === 'drinks') {
			return;
		}
	};
	const lunch = () => {
		if (menuType.menu !== 'lunch') {
			setMenutype({ menu: 'lunch' });
		} else if (menuType.menu === 'lunch') {
			return;
		}
	};
	const starters = () => {
		if (menuType.menu !== 'starters') {
			setMenutype({ menu: 'starters' });
		} else if (menuType.menu === 'starters') {
			return;
		}
	};

	return (
		<Fragment>
			<div className='menu-box'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='heading-title text-center'>
								<br /> <br /> <br />
								<h2>
									Explore Our{' '}
									{menuType.menu === 'all'
										? ''
										: menuType.menu}{' '}
									Menu
								</h2>
								<p>
									Please Explore Our Delicious Ethiopian,
									Ertrian and Amercan food Menu <br />
									Coffee Best In town
								</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='special-menu text-center'>
								<div className='button-group filter-button-group'>
									<button onClick={(e) => all(e)}>All</button>
									<button onClick={(e) => drinks(e)}>
										Drinks
									</button>
									<button onClick={(e) => lunch(e)}>
										Lunch
									</button>
									<button onClick={(e) => dinner(e)}>
										Dinner
									</button>
									<button onClick={(e) => drinks(e)}>
										New Menu
									</button>
								</div>
								{menuType.menu === 'lunch' ||
								menuType.menu === 'starters' ? (
									<Fragment>
										<br />

										<br />
										<div className='button-group filter-button-group'>
											<button
												onClick={(e) => starters(e)}>
												Starters
											</button>
											<button
												onClick={(e) => starters(e)}>
												Starters
											</button>
										</div>
										<h1>
											Entrées all served with injera (flat
											bread) and fresh salad <br />
										</h1>
									</Fragment>
								) : (
									''
								)}
							</div>
						</div>
					</div>
					<div className='row special-list'>
						{menuType.menu === 'all' ? (
							<Fragment>
								<Drinks />
								<Lunch />
								<Dinner />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'drinks' ? (
							<Fragment>
								<Drinks />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'dinner' ? (
							<Fragment>
								<Dinner />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'lunch' ? (
							<Fragment>
								<Lunch />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'starters' ? (
							<Fragment>
								<Starters />
							</Fragment>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Menu;
