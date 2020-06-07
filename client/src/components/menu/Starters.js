import React, { Fragment } from 'react';

const Starters = () => {
	return (
		<Fragment>
			<div className='col-lg-4 col-md-6 special-grid lunch'>
				<h1>FOUL</h1>
				<div className='gallery-single fix'>
					<img
						src='https://via.placeholder.com/800X480'
						className='img-fluid'
						alt='starterImages'
					/>

					<div className='why-text'>
						<h4>
							Crushed fava beans, garnished with fresh onions,
							jalapeños, sour cream, fresh tomatoes, serves with
							fresh regular bread
						</h4>
						<h5>$11.99 </h5>
					</div>
				</div>
			</div>

			<div className='col-lg-4 col-md-6 special-grid lunch'>
				<h1>SAMOSA</h1>
				<div className='gallery-single fix'>
					<img
						src='img/starters/samusa.jpg'
						className='img-fluid'
						alt='starterImages'
					/>

					<div className='why-text'>
						<h4>
							Prime Ground Beef, or Lentil Choice of beef or
							lentil wrapped in an eggroll shell and prepared with
							onions and spices Add side salad for $4 SAMOUSA
						</h4>
						<h5>(2 PIECES) $7.00 </h5>
					</div>
				</div>
			</div>
			<div className='col-lg-4 col-md-6 special-grid lunch'>
				<h1>TIMATIM FITFIT </h1>
				<div className='gallery-single fix'>
					<img
						src='img/starters/timatimfti.jpg'
						className='img-fluid'
						alt='starterImages'
					/>

					<div className='why-text'>
						<h4>
							Chopped fresh tomatoes, onions, and jalapeños, mixed
							with injera (served cold)
						</h4>
						<h5>$12.95 </h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Starters;
