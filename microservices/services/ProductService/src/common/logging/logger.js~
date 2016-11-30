"use strict";
 
import bunyan from 'bunyan';
import bformat from 'bunyan-format';
let formatOut = bformat({
    outputMode: 'short'
});
 
let logger = bunyan.createLogger({
    name: 'MAPI Orchestration API',
    serializers: bunyan.stdSerializers,
 
    //******** Uncomment this below streams section for the info log / file logger format
    streams: [
     {
         level: 'info',
         stream: formatOut
     }
     // ,
     // {
     //     name:'debuglogs',
     //     level: 'debug',
     //     path: './logs/debug.log' // log ERROR and above to a file
     // },
     //  {
     //     name:'errorlogs',
     //     level: 'error',
     //     path: './logs/error.log' // log ERROR and above to a file
     // }
    ]
 
});
 
 
module.exports = logger;
