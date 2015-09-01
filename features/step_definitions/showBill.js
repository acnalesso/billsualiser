module.exports = function () {
  this.World = require('../support/world').World;

  this.Given(/^I am on the view bill page$/, function (callback) {
    this.visit('/', callback);
  });

  this.Then(/^the total of my bill should be '(\d+)'$/, function (total, callback) {
    this.browser.assert.text('#total', total);
    callback();
  });
}
