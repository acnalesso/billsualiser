module.exports = function () {
  this.World = require('../support/world').World;

  this.When(/^I click on '(.*)'$/, function (selector, done) {
    this.clickOn(selector).then(function () {
      done();
    });
  });

  this.Then(/^I should see the following call charges in '(.*)':$/, function (selector, table, done) {
    let a = true;

    this.browser.findElement(this.By.css(selector)).getText().then(function (text) {
      var str = Array.prototype.concat.apply([], table.raw()).join(' ');
      this.expect(str).to.equal(text.replace(/(?:\r\n|\r|\n)/g, ' '));
      done();
    }.bind(this));
  });
}
