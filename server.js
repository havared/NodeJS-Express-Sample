var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req,res){
  res.send(req.body);
});

app.get('/:id', function(req,res){
  res.send(req.params.id);
});

app.listen(3000);
