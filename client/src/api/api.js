import axios from 'axios';

export default axios.create({
	baseURL: '/api',
	headers: {
		'Connection': 'keep-alive',
		'Content-Type': 'application/json',
	},
});
