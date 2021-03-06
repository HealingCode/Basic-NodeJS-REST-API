const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/*Routers requires*/

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promotionRouter = require('./routes/promotionRouter');

/*end Routers requires*/

const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

/*Routers*/

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promotionRouter);
// app.use('/dishes/:dishId', dishRouter);
// app.use('/leaders/:leaderId', dishRouter);
// app.use('/promotions/:promotionId', dishRouter);

/*end Routers*/

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {

	console.log(`Server running at http://${hostname}:${port}`);

});
