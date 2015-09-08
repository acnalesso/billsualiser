var prime = require('optimus_prime_js');
var sampleBillPayload = require('../../test/support/samplePayloadJSON');

module.exports = function () {

  this.World = require('../support/world').World;

  this.Given(/^I am on the view bill page$/, function (done) {
      this.visit('/').then(function () {
        prime('bill', { response: sampleBillPayload, status_code: 200 }).then(function () {
          this.visit('/').then(function () {
            this.browser.wait(function() {
              this.browser.executeScript("return document.getElementById('bill_info_dates');").then(function (element) {
                if (element !== null)
                  done();
              });
            }.bind(this), 5000);
          }.bind(this));
        }.bind(this));
      }.bind(this))
  });

  this.Then(/^I should see "(.*)" in "(.*)"$/, function (str, selector, done) {
    this.browser.findElement(this.By.css(selector)).getText().then(function (text) {
      this.expect(str).to.equal(text.replace(/(?:\r\n|\r|\n)/g, ' '));
      done();
    }.bind(this));
  });
}
