import React, { Fragment, useState, useEffect } from 'react';
import moment from 'moment';
import './style.css';
import API from '../../api/api';
import { reviewAction } from './../../action/review';

const Review = () => {
	const [userrateing, setuserRateing] = useState({
		sad: 'yellow',
		tumbsdown: 'yellow',
		good: 'orange',
		nice: 'orange',
		exccellent: 'red',
	});
	const [userreviews, setuserReviews] = useState({
		reviews: '',
		loading: false,
	});

	useState(async () => {
		const dat = await reviewAction();

		setuserReviews({ reviews: dat, loading: true });
	});
	const [rateColor, setrateColor] = useState({
		sad: '',
		tumbsdown: '',
		good: '',
		nice: '',
		exccellent: '',
		loading: false,
	});
	const [emojie, setemojie] = useState({
		sad: '',
		tumbsdown: '',
		good: '',
		nice: '',
		rate: '',
		exccellent: '',
	});
	const [reviewForm, setreviewForm] = useState({
		name: '',
		review: ' ',
	});
	const { name, review } = reviewForm;
	const userProfile = [
		'img/review/thumbs-down.png',
		'img/review/sad.png',

		'img/review/good.png',
		'img/review/nice.png',
		'img/review/excellent.png',
	];
	const emojieCollection = {
		sad: 'img/review/sad.png',
		tumbsdown: 'img/review/thumbs-down.png',
		good: 'img/review/good.png',
		nice: 'img/review/nice.png',
		exccellent: 'img/review/excellent.png',
	};
	const btncolor = {
		nice: 'btn btn-primary',
		good: 'btn btn-danger',
		bad: 'btn btn-warning',
	};
	const [profile, makeProfile] = useState({
		url: 'img/review/excellent.png',
		btn: btncolor.good,
	});
	const handReviewRating = (rate) => {
		switch (rate) {
			case 1:
				setuserRateing({});
				break;

			case 2:
				setuserRateing({ tumbsdown: 'yellow', sad: 'yellow' });
				break;
			case 3:
				setuserRateing({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
				});
				break;
			case 4:
				setuserRateing({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
					nice: 'red',
				});
				break;

			case 5:
				setuserRateing({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
					nice: 'red',
					exccellent: 'red',
				});
				break;
		}
	};
	const handleRate = (e, rateNum) => {
		switch (rateNum) {
			case 1:
				setemojie({ rate: rateNum, thumbsdown: 'scale(1.5)' });
				makeProfile({
					url: emojieCollection.tumbsdown,
					btn: btncolor.bad,
				});

				setrateColor({});
				break;

			case 2:
				setemojie({ rate: rateNum, sad: 'scale(1.5)' });
				makeProfile({ url: emojieCollection.sad, btn: btncolor.bad });

				setrateColor({ tumbsdown: 'yellow', sad: 'yellow' });
				break;
			case 3:
				setemojie({ rate: rateNum, good: 'scale(1.5)' });
				makeProfile({ url: emojieCollection.good, btn: btncolor.nice });

				setrateColor({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
				});
				break;
			case 4:
				setemojie({ rate: rateNum, nice: 'scale(1.5)' });
				makeProfile({ url: emojieCollection.nice, btn: btncolor.good });

				setrateColor({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
					nice: 'red',
				});
				break;

			case 5:
				setemojie({ rate: rateNum, exccellent: 'scale(1.5)' });
				makeProfile({
					url: emojieCollection.exccellent,
					btn: btncolor.bad,
				});

				setrateColor({
					tumbsdown: 'yellow',
					sad: 'yellow',
					good: 'orange',
					nice: 'red',
					exccellent: 'red',
				});
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
	const onChangehundel = (e) => {
		setreviewForm({ ...reviewForm, [e.target.name]: e.target.value });
	};
	const submitHundler = async (e) => {
		console.log('heloo');
		e.preventDefault();
		const dateOne = moment().format('MMMM Do YYYY, h:mm:ss a');

		try {
			const { rate } = emojie;
			const reviewData = { ...reviewForm, rate, dateOne };
			const body = JSON.stringify(reviewData);
			const res = await API.post('/review', body);

			setuserReviews({ reviews: res.data, loading: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<div className='container'>
				<div className='card mb-3' style={{ maxWidth: 610 }}>
					<div className='only-lg'>
						<div className='star-rate'>
							<span
								style={{ color: rateColor.tumbsdown }}
								onMouseEnter={(e) => handleRate(e, 1)}
								onClick={(e) => handleRate(e, 1)}
								className='fa fa-star '></span>
							<span
								style={{ color: rateColor.sad }}
								onMouseEnter={(e) => handleRate(e, 2)}
								onClick={(e) => handleRate(e, 2)}
								className='fa fa-star '></span>
							<span
								style={{ color: rateColor.good }}
								onMouseEnter={(e) => handleRate(e, 3)}
								onClick={(e) => handleRate(e, 3)}
								className='fa fa-star '></span>
							<span
								style={{ color: rateColor.nice }}
								onMouseEnter={(e) => handleRate(e, 4)}
								onClick={(e) => handleRate(e, 4)}
								className='fa fa-star'></span>
							<span
								style={{ color: rateColor.exccellent }}
								onMouseEnter={(e) => handleRate(e, 5)}
								onClick={(e) => handleRate(e, 5)}
								className='fa fa-star'></span>
						</div>
					</div>
					<div className='row no-gutters'>
						<div className='col-md-4'>
							<img src={profile.url} alt='...' />

							<div>
								<div className='only-lg'>
									<div className='btn-pad'>
										<button
											type='button'
											onClick={(e) => submitHundler(e)}
											className={profile.btn}>
											Submit
										</button>
									</div>
								</div>
							</div>
							<div className='only-mobile'>
								<div className='star-rate'>
									<span
										style={{ color: rateColor.tumbsdown }}
										onMouseEnter={(e) => handleRate(e, 1)}
										onClick={(e) => handleRate(e, 1)}
										className='fa fa-star '></span>
									<span
										style={{ color: rateColor.sad }}
										onMouseEnter={(e) => handleRate(e, 2)}
										onClick={(e) => handleRate(e, 2)}
										className='fa fa-star '></span>
									<span
										style={{ color: rateColor.good }}
										onMouseEnter={(e) => handleRate(e, 3)}
										onClick={(e) => handleRate(e, 3)}
										className='fa fa-star '></span>
									<span
										style={{ color: rateColor.nice }}
										onMouseEnter={(e) => handleRate(e, 4)}
										onClick={(e) => handleRate(e, 4)}
										className='fa fa-star'></span>
									<span
										style={{ color: rateColor.exccellent }}
										onMouseEnter={(e) => handleRate(e, 5)}
										onClick={(e) => handleRate(e, 5)}
										className='fa fa-star'></span>
								</div>
							</div>
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<h5 className='card-title'>Write Review</h5>
								<input
									type='text'
									placeholder='For anonymous leave  it empty'
									className='form-control '
									id='validationServer01'
									name='name'
									onChange={(e) => onChangehundel(e)}
									value={name}
									required
								/>

								<textarea
									className='form-control'
									id='exampleFormControlTextarea1'
									name='review'
									value={review}
									onChange={(e) => onChangehundel(e)}
									rows='3'
									placeholder='write what every you feel about our serivce we are happy to make changes'
									required></textarea>
								{/* <p className="card-text">
			This is a wider card with supporting text below 
			as a natural lead-in to additional content. This 
			content is a little bit longer.</p> */}
								<p className='card-text'>
									<small className='text-muted'>
										Last updated 3 mins ago
									</small>
								</p>
								<div className='only-mobile btn-pad '>
									<button
										type='button'
										onClick={(e) => submitHundler(e)}
										className={profile.btn}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{userreviews.loading &&
					userreviews.reviews.map((review) => (
						<div
							key={review.id}
							className='card mb-3'
							style={{ maxWidth: 610 }}>
							<div className='row no-gutters'>
								<div className='col-md-4'>
									<img
										src={userProfile[review.rate - 1]}
										className='card-img'
										alt='...'
									/>
									<div className='user-rating'>
										<span
											style={{
												color:
													review.rate >= 1
														? userrateing.tumbsdown
														: 'none',
											}}
											className='fa fa-star '></span>
										<span
											style={{
												color:
													review.rate >= 2
														? userrateing.sad
														: 'none',
											}}
											className='fa fa-star '></span>
										<span
											style={{
												color:
													review.rate >= 3
														? userrateing.good
														: 'none',
											}}
											className='fa fa-star '></span>
										<span
											style={{
												color:
													review.rate >= 4
														? userrateing.nice
														: 'none',
											}}
											className='fa fa-star'></span>
										<span
											style={{
												color:
													review.rate == 5
														? userrateing.exccellent
														: 'none',
											}}
											className='fa fa-star'></span>
									</div>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title'>
											{review.name}
										</h5>

										<p className='card-text'>
											{review.review}
										</p>
										<p className='card-text'>
											<small className='text-muted'>
												{review.date}
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					))}

				{/* */}
			</div>
		</Fragment>
	);
};

export default Review;
