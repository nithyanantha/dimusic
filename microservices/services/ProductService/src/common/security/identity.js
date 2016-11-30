import config from '../../config/config';
import logger from '../logging/logger';

module.exports = 
{
	validateIdentity : function(req,callback)
	{
		logger.info('Indentity  Check Started');
		if (req.url=='/health')
		{
			callback(true);
		}
		else if(req.headers['x-auth-header']==config.settings.secId)
		{
			logger.info('Header is valid, Authenticated');
			callback(true);
		}
		else
		{
			logger.info('Header is Invalid, Not Authenticated');
			callback(false);
		}
	}
}