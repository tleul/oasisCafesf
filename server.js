const express = require('express');
const { ppid } = require('process');
// const cor = require('node-cron');
const app = express();

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-auth-token',
	);
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, POST, GET, DELETE, OPTIONS',
	);
	next();
});

app.use('/api/emailsend', require('./router/emailSend'));
app.use('/api/getmesssage', require('./router/emailSend'));
// app.use('/get', require('./router/emailSend'));
if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server Connected '));
