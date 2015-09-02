module.exports = function () {
  this.World = require('../support/world').World;

  this.Given(/^I am on the view bill page$/, function (callback) {
    this.visit('/', callback);
  });

  this.Then(/^I should see '(.*)' in '(.*)'$/, function (str, selector, callback) {
    this.browser.assert.text(selector, str);
    callback.pending();
  });
}
