const express = require('express');
const app = express();
app.listen(6780, () => {
	console.log('listening @ 3K');
});

app.use(express.static('public'));
