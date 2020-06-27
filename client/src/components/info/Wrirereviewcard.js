import React, { Fragment, useState } from 'react';
import './style.css';
const WriteReview = (props) => {
	return (
		<Fragment>
			<div>
				<div className='card-writereview'>
					<div className='pf-review'>
						<img src={props.profile} alt='' />
					</div>
					<div className='text-review'>
						<textarea
							name='writereview'
							id=''
							cols='30'
							placeholder='Write us a review and make our service better thank you'
							rows='3'></textarea>
					</div>
				</div>
				<button className='review-btn'>Submit</button>{' '}
				<span>heloo</span>
			</div>
		</Fragment>
	);
};

export default WriteReview;
