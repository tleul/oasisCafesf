import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Qoute = () => {
	return (
		<Fragment>
			<div className='qt-box qt-background'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 ml-auto mr-auto text-left'>
							<p className='lead'>
								" If you're not the one cooking, stay out of the
								way and compliment the chef. "
							</p>
							<span className='lead'>Michael Strahan</span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Qoute;
