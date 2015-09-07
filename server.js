var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(process.env.PWD + '/dist/index.html');
});

app.listen(port, function () {
  console.log('Listening on: '+ port);
});
