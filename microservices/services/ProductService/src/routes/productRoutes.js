import express from 'express';
import business from '../business/productBusiness';
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
  res.send('welcome to Product Api');
});

router.get('/health', function(req, res,next) {
  res.send('ok');
});



router.options('/product', cors(corsOptions));

router.get('/product',cors(corsOptions), function(req, res,next) {

	logger.info('Message Received in Route Layer');
    
	business.getAllProducts(req.body,function(err,data)
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
		logger.info('Products Successfully Received');
		res.send(data);
	    }
    } catch (e) {
      res.status(500).send('Unhandled Exception');
    }
		
	});
	
});


module.exports = router;
