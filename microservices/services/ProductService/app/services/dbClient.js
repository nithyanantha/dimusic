'use strict';

var _logger = require('../common/logging/logger.js');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  getAllProducts: function getAllProducts(message, callback) {
    _logger2.default.info('Processing DB Requests for Getting All Products call');

    //Hard Coded Values
    var products = [{ name: '3 Colours Red', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/1.jpg', isNew: true, facebook: [100, 20, 35] }, { name: 'Real Marine', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/2.jpg', isNew: false, facebook: [90, 20, 25] }, { name: '13 Engines', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/3.jpg', isNew: false, facebook: [10, 10, 45] }, { name: 'Alex Turner', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/4.jpg', isNew: true, facebook: [80, 60, 85] }, { name: 'Alice in Chains', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/5.jpg', isNew: true, facebook: [10, 0, 11] }, { name: 'Alien Ant Farm', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/6.jpg', isNew: false, facebook: [2, 20, 75] }, { name: 'Better Than Ezra', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/7.jpg', isNew: true, facebook: [0, 20, 37] }, { name: 'Charlotte Gainsbourg', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/8.jpg', isNew: false, facebook: [4, 20, 25] }, { name: 'Death Cab for Cutie', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/9.jpg', isNew: false, facebook: [30, 30, 35] }, { name: 'Fine Young Cannibals', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/10.jpg', isNew: false, facebook: [70, 70, 85] }, { name: 'Gin Blossoms', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/11.jpg', isNew: true, facebook: [1, 2, 3] }, { name: 'Hollywood Undead', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/12.jpg', isNew: false, facebook: [0, 0, 5] }, { name: 'Imogen Heap', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/4.jpg', isNew: false, facebook: [50, 10, 44] }, { name: 'Jill Sobule', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/8.jpg', isNew: false, facebook: [60, 20, 22] }, { name: 'Kings of Convenience', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/1.jpg', isNew: false, facebook: [50, 20, 46] }, { name: 'LostAlone', image: 'https://s3.ap-south-1.amazonaws.com/dimusic/2.jpg', isNew: false, facebook: [40, 20, 10] }];
    callback(null, products);
  }
};
