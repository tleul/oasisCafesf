{/* <div className='container'>
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
		</div> */}
{/* // <Fragment>
// 	<div className='container'>
// 		<div class='form-group'>
// 			<label for='exampleFormControlTextarea1'>
// 				Write Review
// 			</label>
// 			<div className='rate'>
//
// 			</div>

// 			<textarea */}
{/* // 				class='form-control'
// 				id='exampleFormControlTextarea1'
// 				rows='3'></textarea>
// 		</div> */}

{
	/* <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Pariatur eum quo quibusdam, illo, beatae ab offici
            a eos odit doloribus aliquam veniam nulla, voluptatem quaer
                at itaque similique hic saepe officiis molestiae!</p>
        </div>
		<div className='rate'>
			 */
}
{/* // 	</div>
// </Fragment> */}
.box-review {
	margin: 5rem 0 0 0;
	border: solid red 2px;
}
.star-rate span {
	margin: 2rem 3rem 0 2rem;
	font-size: 2rem;
}
.star-rate span:hover {
	color: red;
}
.rate-emojie .rate-img {
	margin: 1rem 2rem 1rem 2rem;
}
.card-writereview {
	display: flex;
	flex-direction: row;
	/* box-shadow: 2px 5px 3px 0 rgba(0, 0, 0, 0.2); */
}
.card-writereview textarea {
	font-size: 3rem;

	margin: 3rem 1rem 0rem 0rem;
	box-shadow: 10px 0px 10px 10px red;
}
.pf-review img {
	width: 100%;
}
.review-btn {
	width: 8rem;
	font-size: 2rem;
	border: none;
	color: black;
	background-color: white;
	margin: 1rem 1rem 4rem 8rem;
	box-shadow: 0px 10px 10px 10px red;
}
.pf-review {
	margin: 2rem 1rem 0rem 3rem;
	width: 20rem;
	height: 18rem;
	box-shadow: 0px 10px 10px 10px red;
}
