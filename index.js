var app = require('./server/server.js');

var port = 3000;

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
