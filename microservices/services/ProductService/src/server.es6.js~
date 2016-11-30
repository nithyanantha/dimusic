"use strict";
import config from './config/config';
import logger from './common/logging/logger';


if (config.settings.clusterEnabled === 1) {
    require('cluster-service').start({
        workers: './config/app.js',
        accessKey: config.settings.clusterAccessKey,
        port: config.settings.masterPort
    });
    logger.info('started as a cluster mode');
}
else {

	logger.info('started as a standalone server');

    require('./config/app.js');
}

