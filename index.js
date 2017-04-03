var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function respondbye(req, res, next) {
  res.send('goodbye ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/', function (req, res) { 
   res.send('Restify Playground');
}); 
// server.get('/hello/:name', respond);
// server.get('/goodbye/:name', respondbye);
// server.head('/hello/:name', respond);
// server.pre(restify.pre.userAgentConnection());

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});