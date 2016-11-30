var os = require('os');
var commandLineArgs = process.argv;

function SettingsConfig() {
    this.settings = {};

    initializeSettings(this.settings);
}

function initializeSettings(settings) {
    createArgumentSettings(settings);
    loadConfigSettings(settings);
    loadServerSettings(settings);
}

function createArgumentSettings(settings) {
    settings.environment = commandLineArgs[2] ? commandLineArgs[2].toLowerCase() : 'dev';
    settings.clusterEnabled = commandLineArgs[3] ? parseInt(commandLineArgs[3]) : 0;
    settings.hostName = commandLineArgs[4] ? commandLineArgs[4] : '127.0.0.1';
    settings.masterPort = commandLineArgs[5] ? parseInt(commandLineArgs[5]) : 3000;
    settings.workerPort = commandLineArgs[6] ? parseInt(commandLineArgs[6]) : 81;
}

function loadConfigSettings(settings) {
    var config = loadEnvironmentConfigFile(settings);

    var settingsLength = config.settings.length;

    for (var i = 0; i < settingsLength; i++) {
        var configSetting = config.settings[i];

        if(configSetting.name && configSetting.value) {
            settings[configSetting.name] = configSetting.value;
        }
    }
}

function loadServerSettings(settings) {
    settings.serverName = os.hostname().toLowerCase();
    settings.serverCores = os.cpus().length;
}

function loadEnvironmentConfigFile(settings) {
    var config;

    var configLocation = './dev.config.json';

    switch (settings.environment) {
        case 'test':
            configLocation = './test.config.json';
            break;
        case 'prod':
            configLocation = './prod.config.json';
            break;
    }

    try {
        config = require(configLocation);
    }
    catch (e) {
        throw 'Unable to parse "lib/config/settings/"' + configLocation + ': ' + e;
    }

    if (!config.settings) {
        throw 'Property "settings" is no defined: ' + configLocation;
    }

    return config;
}

var settingsConfig = new SettingsConfig();

module.exports = settingsConfig;
