
import logger from '../common/logging/logger.js';
import config from "../config/config";


module.exports = {

addToBasket: function(message,callback)
{	
	logger.info('Processing DB Requests for Getting All Products call');

	//Hard Coded Values

   var product = message.productName;

   var SuccessMessage = {message:"Product : *****" + product + "******  successfully added to the basket"};
	
	callback(null,SuccessMessage);
}
}

