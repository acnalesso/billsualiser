var Browser = require('zombie');

module.exports.World = function(callback) {
  this.browser = new Browser({
    site: 'http://localhost.bskyb.com:3000'
  });

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };

  callback();
}
