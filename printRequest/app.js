var express = require('express')
 , http = require('http');

var bodyParser = require('body-parser');
var port = 7002
var app = express();

app.set('port', process.env.PORT || port);

app.use(express.static(__dirname + '/public/images'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(function (req, res) {
  console.log(req.body);
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.post('/print',function(req,res){

   console.log(req.body);

} );


http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});
