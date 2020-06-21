import React, { Fragment, useState } from 'react';
import Drinks from './Drinks';
import Typist from 'react-typist';
import Enteries from './Enteries';
import Dinner from './Dinner';

import Starters from './Starters';
import Pasta from './Pasta';
import American from './americans/American';
import Saladas from './americans/Salada';
import Omeletes from './americans/Omelets';
import Sandwitches from './americans/Sandwitches';
import Burgers from './americans/Burger';

const Menu = () => {
	const [menuType, setMenutype] = useState({
		menu: 'enteries',
	});

	const [info, toggleInfo] = useState(true);
	const [americanMenu, toggleAmerican] = useState(false);
	setTimeout(() => {
		toggleInfo(false);
	}, 15000);
	const bageles = () => {
		if (menuType.menu !== 'bageles') {
			console.log(americanMenu);
			setMenutype({ menu: 'bageles' });
		} else if (menuType.menu === 'bageles') {
			return;
		}
	};
	const omeletes = () => {
		if (menuType.menu !== 'omeletes') {
			setMenutype({ menu: 'omeletes' });
		} else if (menuType.menu === 'omeletes') {
			return;
		}
	};
	const sandwiches = () => {
		if (menuType.menu !== 'sandwiches') {
			setMenutype({ menu: 'sandwiches' });
		} else if (menuType.menu === 'sandwiches') {
			return;
		}
	};
	const burgers = () => {
		if (menuType.menu !== 'burgers') {
			setMenutype({ menu: 'burgers' });
		} else if (menuType.menu === 'burgers') {
			return;
		}
	};
	const salads = () => {
		if (menuType.menu !== 'salads') {
			toggleAmerican(true);
			setMenutype({ menu: 'salads' });
		} else if (menuType.menu === 'salads') {
			return;
		}
	};
	const drinks = () => {
		if (menuType.menu !== 'drinks') {
			toggleAmerican(false);
			setMenutype({ menu: 'drinks' });
		} else if (menuType.menu === 'drinks') {
			return;
		}
	};
	const american = () => {
		console.log('clicked');
		if (menuType.menu !== 'americans') {
			toggleAmerican(true);
			setMenutype({ menu: 'americans' });
		} else if (menuType.menu === 'americans') {
			return;
		}
	};
	const enteries = () => {
		if (menuType.menu !== 'enteries') {
			toggleAmerican(false);
			setMenutype({ menu: 'enteries' });
		} else if (menuType.menu === 'enteries') {
			return;
		}
	};
	const pasta = () => {
		if (menuType.menu !== 'pasta') {
			toggleAmerican(false);
			setMenutype({ menu: 'pasta' });
		} else if (menuType.menu === 'pasta') {
			return;
		}
	};

	const starters = () => {
		if (menuType.menu !== 'starters') {
			toggleAmerican(false);
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
									<div className='info'>
										<Typist>
											{' '}
											<i
												className='flash'
												style={{
													color: 'red',
													fontSize: 20,
												}}>
												Please hover over or press on
												the meal image for description ♥
												Thank You ♥
											</i>
										</Typist>
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
										<img
											width='20'
											height='20'
											src='img/pasta/coffee.svg'
											alt=''
										/>
										&nbsp; Drinks
									</button>
									<button onClick={(e) => enteries(e)}>
										<i
											style={{ color: 'black' }}
											className='fa fa-cutlery'
											aria-hidden='true'></i>
										&nbsp; Entries
									</button>

									<button onClick={(e) => pasta(e)}>
										<img
											width='20'
											height='20'
											src='img/pasta/pasta.svg'
											alt=''
										/>
										&nbsp; Pre-Pasta-Rous
									</button>
									<button onClick={(e) => pasta(e)}>
										<img
											width='20'
											height='20'
											src='img/pasta/burger.svg'
											alt=''
										/>
										&nbsp; American Menu
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
								{menuType.menu === 'americans' ||
								americanMenu === true ? (
									<Fragment>
										<br />
										<br />
										<div>
											<h1>Our Best American Menus</h1>
										</div>
										<div className='button-group filter-button-group'>
											<button onClick={(e) => bageles(e)}>
												<img
													width='20'
													height='20'
													src='img/american/bagels/bagel.svg'
													alt=''
												/>
												&nbsp;Bagels
											</button>
											<button
												onClick={(e) => omeletes(e)}>
												<img
													width='20'
													height='20'
													src='img/american/bagels/meal.svg'
													alt=''
												/>
												&nbsp; Omelettes
											</button>
											<button
												onClick={(e) => sandwiches(e)}>
												<img
													width='20'
													height='20'
													src='img/american/bagels/sandwich.svg'
													alt=''
												/>
												&nbsp; Sandwiches
											</button>
											<button onClick={(e) => burgers(e)}>
												<img
													width='20'
													height='20'
													src='img/american/bagels/fast-food.svg'
													alt=''
												/>
												&nbsp;Burgers
											</button>
											<button onClick={(e) => salads(e)}>
												<img
													width='20'
													height='20'
													src='img/american/bagels/salad.svg'
													alt=''
												/>
												&nbsp;Saladas
											</button>
										</div>
										<br />
										<br />
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
								<Enteries />
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
						{/* {menuType.menu === 'americans' ? (
							<Fragment>
								<American />
							</Fragment>
						) : (
							''
						)} */}
						{menuType.menu === 'bageles' ? (
							<Fragment>
								<American />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'omeletes' ? (
							<Fragment>
								<Omeletes />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'sandwiches' ? (
							<Fragment>
								<Sandwitches />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'salads' ? (
							<Fragment>
								<Saladas />
							</Fragment>
						) : (
							''
						)}
						{menuType.menu === 'burgers' ? (
							<Fragment>
								<Burgers />
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
