var express = require('express'),
    app = express(),
    samplePayloadJSON = require('./tests/support/samplePayloadJSON');

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(process.env.PWD + '/dist/index.html');
});

app.get('/payload', function (req, res) {
  res.send(JSON.stringify(samplePayloadJSON));
});

app.listen(3000, function () {
  console.log('Listening on: 3000');
});
