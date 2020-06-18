import React, { Fragment, useState } from 'react';
import Drinks from './Drinks';

import Lunch from './Lunch';
import Dinner from './Dinner';

import Starters from './Starters';
import Pasta from './Pasta';

const Menu = () => {
	const [menuType, setMenutype] = useState({
		menu: 'enteries',
	});
	const [info, toggleInfo] = useState(true);
	setTimeout(() => {
		toggleInfo(false);
	}, 5000);
	const drinks = () => {
		if (menuType.menu !== 'drinks') {
			setMenutype({ menu: 'drinks' });
		} else if (menuType.menu === 'drinks') {
			return;
		}
	};
	const enteries = () => {
		if (menuType.menu !== 'enteries') {
			setMenutype({ menu: 'enteries' });
		} else if (menuType.menu === 'enteries') {
			return;
		}
	};
	const pasta = () => {
		if (menuType.menu !== 'pasta') {
			setMenutype({ menu: 'pasta' });
		} else if (menuType.menu === 'pasta') {
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
									{menuType.menu === 'enteries'
										? ''
										: menuType.menu}{' '}
									Menu
								</h2>
								<p>
									Please Explore Our Delicious Ethiopian,
									Ertrian and Amercan food Menu <br />
									Coffee Best In town
								</p>
								{info && (
									<div class='info'>
										<i
											style={{
												color: 'red',
												fontSize: 20,
											}}>
											Please hover over or press on the
											meal image for description ♥ Thank
											You ♥
										</i>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='special-menu text-center'>
								<div className='button-group filter-button-group'>
									<button onClick={(e) => drinks(e)}>
										Drinks
									</button>
									<button onClick={(e) => enteries(e)}>
										Entries
									</button>

									<button onClick={(e) => pasta(e)}>
										Pre-Pasta-Rous
									</button>
								</div>
								{menuType.menu === 'enteries' ||
								menuType.menu === 'starters' ? (
									<Fragment>
										<br />

										<br />
										<div className='button-group filter-button-group'>
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
						{menuType.menu === 'drinks' ? (
							<Fragment>
								<Drinks />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'pasta' ? (
							<Fragment>
								<Pasta />
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
						{menuType.menu === 'enteries' ? (
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
