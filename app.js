
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello there customer!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/demo', (req, res) => {
  res.set('X-stack', 'you found the custom header');
  res.status(418);
  res.sedn("Can't listen im getting some sleep");
});

