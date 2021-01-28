const expect = require("chai").expect

exports.config = {
 
    runner: 'local',

    specs: [
        './test/specs/**/*.test.js'
    ],
    exclude: [
    ],
    
    maxInstances: 10,
  
    capabilities: [{
  
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],
    
    logLevel: 'info',
    
    bail: 0,
  
    baseUrl: 'http://localhost',
   
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
  
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: function () {
        global.expect = expect
    },
    
    
}
