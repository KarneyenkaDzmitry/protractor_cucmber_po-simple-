'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: './features/step_definitions/*.js',
    tags: false,
    profile: false,
    'no-source': true
  },
  specs: ['./features/*.feature'],
  baseURL: 'http://localhost:8080/',
  capabilities: {
    'browserName': 'chrome'
  },
  params: {
    login: {
      username: 'dzmitry.karneyenka',
      password: 'testpassword',
      remember: false
    }
  },
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(20000);
    global.vdr = browser.webdriver;
  }
}