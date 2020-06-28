import API from '../api/api';

export const reviewAction = async (setReviews) => {
	const res = await API.get('/review');

	return res.data;
};
