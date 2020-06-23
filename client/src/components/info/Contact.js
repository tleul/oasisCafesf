import React, { Fragment, useState } from 'react';

const Contact = () => {
	const [contactForm, setcontactform] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, seterrors] = useState({});
	const { name, email, message } = contactForm;

	const onChange = (e) => {
		const validEmailRegex = RegExp(
			/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		);
		e.preventDefault();
		const { name, value } = e.target;
		switch (name) {
			case 'name':
				errors.name =
					value.length < 5
						? 'Name must be more than 5 charcters Long!'
						: '';
				break;
			case 'email':
				errors.email = validEmailRegex.test(value)
					? ''
					: 'email is not valid';
				break;
			case 'message':
				errors.message =
					value.length < 5 ? 'Please try to describe more ' : '';
				break;
			default:
				break;
		}

		setcontactform({ ...contactForm, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
	};
	return (
		<Fragment>
			<div className='all-page-title page-breadcrumb'>
				<div className='container text-center'>
					<div className='row'></div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='contact-box'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='heading-title text-center'>
								<h2>Contact</h2>
								<p>
									Please type any thing you feel, We are
									welcome to assist you!!
								</p>
							</div>
							<div className='menu-box'>
								<p className='flash' id='error'></p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<form id='contactForm'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												id='name'
												name='name'
												value={name}
												onChange={(e) => onChange(e)}
												placeholder='Your Name'
												required
												data-error='Please enter your name'
											/>

											<div className='help-block with-errors'>
												<p style={{ color: 'red' }}>
													{errors.name}
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-12'>
										<div className='form-group'>
											<input
												type='text'
												placeholder='Your Email'
												id='email'
												className='form-control'
												name='email'
												onChange={(e) => onChange(e)}
												value={email}
												required
												data-error='Please enter your email'
											/>
											<div className='help-block with-errors'>
												<p style={{ color: 'red' }}>
													{errors.email}
												</p>
											</div>
										</div>
									</div>

									<div className='col-md-12'>
										<div className='form-group'>
											<textarea
												className='form-control'
												id='message'
												placeholder='Your Message'
												rows='4'
												onChange={(e) => onChange(e)}
												name='message'
												value={message}
												data-error='Write your message'
												required></textarea>
											<div className='help-block with-errors'>
												<p style={{ color: 'red' }}>
													{errors.message}
												</p>
											</div>
										</div>
										<div className='submit-button text-center'>
											<button
												id='send'
												onClick={(e) => sendEmail(e)}
												className='btn btn-common'
												type='submit'>
												Send Message
											</button>
											<div
												id='msgSubmit'
												className='h3 text-center hidden'></div>
											<div className='clearfix'></div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Contact;
