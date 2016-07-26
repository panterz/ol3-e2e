exports.config = {
  specs: [
    'e2e/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/',

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  cucumberOpts: {
    require: 'e2e/*Steps.js',
    format: 'pretty'
  }
}
