const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next)=>{

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();

})

.get( (req,res,next) =>{
	res.end('I send you all the leaders');
})

.post((req,res,next) =>{
	res.end('Will add the leader: ' + req.body.name +
	' with details: ' + req.body.description);
})

.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT operation not supported on /leaders');
})

.delete((req,res,next) =>{
	res.end("Deleting all leaders");
});

/*
    FOR ID
*/

leaderRouter.route('/:leaderId').all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

.get( (req,res,next) =>{
	res.end('I send you the leader: '+
  req.params.leaderId);
})

.post((req,res,next) =>{
  res.statusCode = 403;
	res.end('POST operation not supported on /leader/'
	+ req.params.leaderId);
})

.put((req,res,next)=>{
  res.write('Will update the leader: '+
  req.params.leaderId);
  res.end('Will update the leader: '+
  req.body.name + 'with details: '+
  req.body.description);
})

.delete((req,res,next) =>{
  res.end('Deleting the leader: '+
	req.params.leaderId);
});

module.exports = leaderRouter;
