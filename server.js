var express = require('express'),
    app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(process.env.PWD + '/dist/index.html');
});

app.listen(3000, function () {
  console.log('Listening on: 3000');
});
