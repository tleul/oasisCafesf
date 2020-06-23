const express = require('express');

const router = express.Router();

const fs = require('fs');
const fileName = './user.json';
const db = require('../user.json');
router.get('/', (req, res) => {
	res.json(db.user);
});
module.exports = router;
// app.use(express.json({ extended: false }));

// app.post('/getcontact', async (req, res) => {
// 	const { name, email, message } = req.body;
// 	const index = db.user.map((us) => us.email).indexOf(email);
// 	db.user.splice(index, 1);

// 	// 	db.user.push(req.body);
// 	await fs.writeFile(fileName, JSON.stringify(db), function writeJSON(err) {
// 		if (err) return console.log(err);
// 		res.json(db);
// 		console.log(JSON.stringify(db));
// 		console.log('writing to ' + fileName);
// 	});
// });

// router.post('/', async (req, res) => {
// 	let transporter = nodemailer.createTransport({
// 		service: 'gmail',
// 		port: 25,
// 		secure: true, // true for 465, false for other ports
// 		auth: {
// 			user: 'nonscamtest@gmail.com', // generated ethereal user
// 			pass: 'Testmail2020', // generated ethereal password
// 		},
// 	});
// 	let info = await transporter.sendMail({
// 		from: '"Manage your Todo App" <leult2018@gmail.com>', // sender address
// 		to: user.email, // list of receivers
// 		subject: 'Welcome to Todo App', // Subject line
// 		text: `Welcome ${user.name} I am glad you join the Manage Todo App \n
// 					 you password will be the last four digits of your phone. Please give me a feedback `, // plain text body
// 		html: `<p>Welcome ${user.name} I am glad you join the Manage Todo App \n </p>
// 						<a href="www.google.com"><b>Please Verify Your Email</b></a>
// 					 <p>you password will be the last four digits of your phone. Please give me a feedback </p>`, // html body
// 	});
// });
