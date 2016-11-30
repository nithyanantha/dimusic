import express from 'express';
import business from '../business/orchestration';
import logger from '../common/logging/logger';
import securityCors from '../common/security/cors';
import cors from 'cors';

let router = express.Router();
let corsOptions = null;
securityCors.getOptions(function(options)
	{
		corsOptions= options;

	});


router.options('/', cors(corsOptions));

router.get('/',cors(corsOptions), function(req, res,next) {
  res.send('welcome to Orchestration Api');
});

router.get('/health', function(req, res,next) {
  res.send('ok');
});



router.options('/orchestration', cors(corsOptions));

router.post('/orchestration',cors(corsOptions), function(req, res,next) {

	logger.info('Message Received in Route Layer');
    
	business.sayHello(req.body,function(err,data)
	{
	try {
     if(err)
		{
			logger.info('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name,err.message,err.statusCode,err.stack);
            res.status(500).json({message: err.name + ' ' +  err.message, statusCode: err.statusCode});
            res.end();
		}
		if(data)
		{
		logger.info('Message Successfully Processed');
		res.send(data);
	    }
    } catch (e) {
      res.status(500).send('Unhandled Exception');
    }
		
	});
	
});


module.exports = router;
