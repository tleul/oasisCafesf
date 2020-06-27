import React, { Fragment, useState, useEffect } from 'react';
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
	const btncolor={
		nice: "btn btn-primary",
		good: "btn btn-danger",
		bad: "btn btn-warning"
	}
	const [profile, makeProfile] = useState({
	url: 'img/review/excellent.png',
	btn: btncolor.good
	});
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
				makeProfile({url: emojieCollection.tumbsdown, btn: btncolor.bad});
				break;

			case 2:
				setemojie({ sad: 'scale(1.5)' });
				makeProfile({url: emojieCollection.sad, btn: btncolor.bad});
				break;
			case 3:
				setemojie({ good: 'scale(1.5)' });
				makeProfile({url: emojieCollection.good, btn: btncolor.nice});
				break;
			case 4:
				setemojie({ nice: 'scale(1.5)' });
				makeProfile({url: emojieCollection.nice , btn: btncolor.good});
				break;

			case 5:
				setemojie({ exccellent: 'scale(1.5)' });
				makeProfile({url: emojieCollection.exccellent, btn: btncolor.bad});
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





	return (
		<Fragment>
			<div className='container'>

			<div className="card mb-3" style={{maxWidth: 610}}>
			<div className='only-lg'>
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
				
			</div>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={profile.url}  alt="..."/>
	  
		<div>
		<div className='only-lg'>
			<div className='btn-pad'>
			<button type="button" class={profile.btn}>Submit</button>
			</div>
		
		</div>
		</div>
	<div className='only-mobile'>
	
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
	</div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Write Review</h5>

    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        {/* <p className="card-text">
			This is a wider card with supporting text below 
			as a natural lead-in to additional content. This 
			content is a little bit longer.</p> */}
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
		<div   className='only-mobile btn-pad '>
			<button type="button" class={profile.btn}>Submit</button>
			</div>
	  </div>
    </div>
  </div>
</div>
</div>
		</Fragment>

	);
};

export default Review;
