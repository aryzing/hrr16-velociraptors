var app = require('./server/server.js');
var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/greenfield';
mongoose.connect(mongoURI);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server started on port ', port);
