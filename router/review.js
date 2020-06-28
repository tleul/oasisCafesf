const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');
const fileName = 'user.json';
const db = require('../user.json');
//Post Review
router.post('/', async (req, res) => {
	const { name, review, rate } = req.body;
	const id = uuidv4();
	const data = {
		id: id,
		name: name,
		review: review,
		rate: rate,
	};
	db.review.push(data);
	await fs.writeFile(fileName, JSON.stringify(db), function writeJSON(err) {
		if (err) return console.log(err);
		console.log(db);
	});
});
router.get('/', (req, res) => {
	const reviews = db.review;
	const filterReview = reviews.filter((review) => review.rate > 3);
	res.json(filterReview);
});

module.exports = router;
