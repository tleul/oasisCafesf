import React, { Fragment, useState } from 'react';
import './style.css';
import WriteReview from './Wrirereviewcard';
const Review = () => {
	const emojieCollection = {
		sad: 'img/review/sad.png',
		tumbsdown: 'img/review/thumbs-down.png',
		good: 'img/review/good.png',
		nice: 'img/review/nice.png',
		exccellent: 'img/review/excellent.png',
	};
	const [profile, makeProfile] = useState({});
	const [emojie, setemojie] = useState({
		sad: '',
		tumbsdown: '',
		good: '',
		nice: '',
		exccellent: '',
	});
	const handleRate = (e, rateNum) => {
		switch (rateNum) {
			case 1:
				setemojie({ thumbsdown: 'scale(1.5)' });
				makeProfile(emojieCollection.tumbsdown);
				break;

			case 2:
				setemojie({ sad: 'scale(1.5)' });
				makeProfile(emojieCollection.sad);
				break;
			case 3:
				setemojie({ good: 'scale(1.5)' });
				makeProfile(emojieCollection.good);
				break;
			case 4:
				setemojie({ nice: 'scale(1.5)' });
				makeProfile(emojieCollection.nice);
				break;

			case 5:
				setemojie({ exccellent: 'scale(1.5)' });
				makeProfile(emojieCollection.exccellent);
				break;
			default:
				setemojie({
					sad: '',
					tumbsdown: '',
					good: '',
					nice: '',
					exccellent: '',
				});
				makeProfile({});
		}
	};
	console.log(profile);
	return (
		<div className='container'>
			<div className='box-review'>
				<div className='star-rate'>
					<span
						onClick={(e) => handleRate(e, 1)}
						className='fa fa-star '></span>
					<span
						onClick={(e) => handleRate(e, 2)}
						className='fa fa-star '></span>
					<span
						onClick={(e) => handleRate(e, 3)}
						className='fa fa-star '></span>
					<span
						onClick={(e) => handleRate(e, 4)}
						className='fa fa-star'></span>
					<span
						onClick={(e) => handleRate(e, 5)}
						className='fa fa-star'></span>
				</div>
				<div className='rate-emojie'>
					<span>
						<img
							style={{
								transform: emojie.thumbsdown,
							}}
							width='50'
							className='rate-img'
							src='img/review/thumbs-down.png'
							alt=''
						/>
					</span>
					<span>
						<img
							style={{ transform: emojie.sad }}
							width='50'
							className='rate-img'
							src='img/review/sad.png'
							alt=''
						/>
					</span>
					<span>
						<img
							style={{ transform: emojie.good }}
							width='50'
							className='rate-img'
							src='img/review/good.png'
							alt=''
						/>
					</span>
					<span>
						<img
							style={{
								transform: emojie.nice,
							}}
							width='50'
							className='rate-img'
							src='img/review/nice.png'
							alt=''
						/>
					</span>
					<span>
						<img
							style={{
								transform: emojie.exccellent,
							}}
							width='50'
							className='rate-img'
							src='img/review/excellent.png'
							alt=''
						/>
					</span>
				</div>
				<WriteReview profile={profile} />
			</div>
		</div>
	);
};

export default Review;
// <Fragment>
// 	<div className='container'>
// 		<div class='form-group'>
// 			<label for='exampleFormControlTextarea1'>
// 				Write Review
// 			</label>
// 			<div className='rate'>
//
// 			</div>

// 			<textarea
// 				class='form-control'
// 				id='exampleFormControlTextarea1'
// 				rows='3'></textarea>
// 		</div>

{
	/* <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Pariatur eum quo quibusdam, illo, beatae ab offici
            a eos odit doloribus aliquam veniam nulla, voluptatem quaer
                at itaque similique hic saepe officiis molestiae!</p>
        </div>
		<div className='rate'>
			 */
}
// 	</div>
// </Fragment>
