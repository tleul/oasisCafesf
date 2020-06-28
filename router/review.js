const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');
const fileName = 'user.json';
const db = require('../user.json');
//Post Review
router.post('/', (req, res) => {
	const { name, review, rate } = req.body;
	const id = uuidv4();
	const data = {
		id: id,
		name: name,
		review: review,
		rate: rate,
	};
	console.log(data);

	// await fs.writeFile(fileName, JSON.stringify(db), function writeJSON(err) {
	// 	if (err) return console.log(err);
	//     console.log(db)
	// });
});

module.exports = router;
