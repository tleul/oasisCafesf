const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const fs = require('fs');
const fileName = './user.json';
const db = require('../user.json');
// router.get('/', (req, res) => {
// 	res.json(db.user);

router.post('/', async (req, res) => {
	try {
		const { name, email, message } = req.body;

		db.user.push(req.body);
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			port: 25,
			secure: true, // true for 465, false for other ports
			auth: {
				user: 'nonscamtest@gmail.com', // generated ethereal user
				pass: 'Testmail2020', // generated ethereal password
			},
		});
		let info = await transporter.sendMail({
			from: '"Manage your Todo App" <leult2018@gmail.com>', // sender address
			to: email, // list of receivers
			subject: 'Welcome to Todo App', // Subject line
			text: `Welcome I am glad you join the Manage Todo App \n
								 you password will be the last four digits of your phone. Please give me a feedback `, // plain text body
			html: `<p>Welcome ${name} I am glad you join the Manage Todo App \n </p>
									<a href="www.google.com"><b>Please Verify Your Email</b></a>
								 <p>you password will be the last four digits of your phone. Please give me a feedback </p>`, // html body
		});
		return res.json({
			msg: `Dear ${req.body.name} Thank you for conatcting US !`,
		});
	} catch (error) {
		return res.json({
			msg: `Dear  ${req.body.name} Please Provide valid email Thank you`,
		});
	}
});
// await fs.writeFile(fileName, JSON.stringify(db), function writeJSON(
// 		err,
// 	) {
// 		if (err) return console.log(err);

// 		res.json(db);
// 	});
// } catch (error) {
// 	console.log(error);
// }
// app.post('/getcontact', async (req, res) => {
// const index = db.user.map((us) => us.email).indexOf(email);
// db.user.splice(index, 1);
module.exports = router;
