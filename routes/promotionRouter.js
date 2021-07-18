const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/').all((req,res,next)=>{

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();

})

.get( (req,res,next) =>{
	res.end('I send you all the promotions');
})

.post((req,res,next) =>{
	res.end('Will add the promotion: ' + req.body.name +
	' with details: ' + req.body.description);
})

.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT operation not supported on /promotions');
})

.delete((req,res,next) =>{
	res.end("Deleting all promoitons");
});

/*
    FOR ID
*/

promotionRouter.route('/:promotionId').all((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

.get( (req,res,next) =>{
	res.end('I send you the promotion: '+
  req.params.promotionId);
})

.post((req,res,next) =>{
  res.statusCode = 403;
	res.end('POST operation not supported on /promotion/'
	+ req.params.promotionId);
})

.put((req,res,next)=>{
  res.write('Will update the promotion: '+
  req.params.promotionId);
  res.end('Will update the promotion: '+
  req.body.name + 'with details: '+
  req.body.description);
})

.delete((req,res,next) =>{
  res.end('Deleting the promotion: '+
	req.params.promotionId);
});

module.exports = promotionRouter;
