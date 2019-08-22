const express = require('express');
const app = express();
app.listen(6780, () => {
	console.log('listening @ 6780');
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
	console.log('REQUEST MADE');
	console.log(request.body);
	response.json({
		status: 'success',
		latitude: data.lat,
		longitude: data.long
	});
});
