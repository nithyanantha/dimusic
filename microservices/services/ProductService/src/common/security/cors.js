import config from '../../config/config';
import cors from 'cors';
module.exports = 
{

	getOptions:function(callback)
	{
		var whitelist = config.settings.corsWhitelist;
		var corsOptions = 
		{
  			origin: function(origin, callback){
    		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    		callback(null, originIsWhitelisted);
  			}
		};
		callback(corsOptions);
	}	


}