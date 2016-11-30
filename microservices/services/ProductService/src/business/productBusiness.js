import dbclient from '../services/dbClient';

import logger from '../common/logging/logger.js';
import config from '../config/config';
import errorMessage from '../common/errors/error';

module.exports = 
{
	getAllProducts:function(message,done)
	{
	   getAllProductsFromDB(message,function(err,result)
		{
 		if(err) {callback(err);}
		else
		{
		done(null,result);
		}

		});
	   
        }
}

function getAllProductsFromDB(message,callback)
{
		try
		{
		
		dbclient.getAllProducts(message,function(err,data)
			{
				let retry = 0;
				if(err)
				{
					logger.info("Error Received from DB service layer to business");
					
					var eObject = new Error('UnKnown Error');
					throw eObject;
				}
				else
				{
				logger.info("Products Successfully received from DB service");

				logger.info("data:" + JSON.stringify(data));
				callback(null,data);
				}
			});

		}
		catch(ex)
		{
			logger.info('Un Handleded Exception Occurs');
			callback(ex);
		}
		

}
