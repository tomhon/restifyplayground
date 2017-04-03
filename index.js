// var restify = require('restify');

// // function respond(req, res, next) {
// //   res.send('hello ' + req.params.name);
// //   next();
// // };

// // function respondbye(req, res, next) {
// //   res.send('goodbye ' + req.params.name);
// //   next();
// // };

// var server = restify.createServer();

// server.get('/', function (req, res) { 
//    res.send('Restify Playground');
// }); 

// // server.get('/hello/:name', respond);
// // server.get('/goodbye/:name', respondbye);
// // server.head('/hello/:name', respond);
// // server.pre(restify.pre.userAgentConnection());

// server.listen(8080, function() {
//   console.log('%s listening at %s');
// });



//*************************************************** */



var restify = require('restify');
var server = restify.createServer();


server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});




// Setup Restify Server 

server.get('/', function (req, res) { 

    res.send('K9 Production Bot Running');
}); 


