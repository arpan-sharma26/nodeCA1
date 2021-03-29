const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
hbs.registerPartials('./views/partials');

const pubPath = path.join(__dirname, './public');
app.set('view engine', 'hbs');

app.get('/booking', (req, res) => {
	let date = new Date();
	res.render('booking', {
		bookingFormTag: 'Please fill the booking form right below:- ',
		dateD: date.getDate(),
		dateM: date.getMonth() + 1,
		dateY: date.getFullYear(),
	});
});

app.get('/status', (req, res) => {
	res.render('status', {
		statusChangeText: 'Change the status for the reservation from here :-',
	});
});

app.get('/update', (req, res) => {
	res.render('update', {
		updateFormTag: 'Update booking details :-',
	});
});

app.get('/cancel', (req, res) => {
	res.render('cancel', {
		cancelFormTag: 'Please cancel booking by filling the below form:- ',
		cancel: 'Cancel Booking Status from Here',
	});
});

app.listen(PORT, () => {
	console.log('Server has been started.');
});

app.use(express.static(pubPath));
