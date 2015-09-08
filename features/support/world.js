var webdriver = require('selenium-webdriver')
var chaiAsPromised = require('chai-as-promised');
var chai = require('chai');

chai.use(chaiAsPromised);
chai.should();


  var driver = new webdriver.Builder().
    usingServer("http://localhost:4444/wd/hub").
    withCapabilities(webdriver.Capabilities.firefox()).
    build();

module.exports.World = function(callback) {

  this.browser = driver;

  this.visit = function (url) {
    var defaultUrl = "http://localhost:3000";
    return this.browser.get(defaultUrl + url);
  };

  this.clickOn = function (selector) {
    return this.browser.findElement(this.By.css(selector)).click();
  };

  this.expect = chai.expect

  this.By = webdriver.By;

  callback();
}
