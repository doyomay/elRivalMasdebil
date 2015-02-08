/**
 * Created by Gerardo on 08/02/2015.
 */
var express = require('express'),
    app = express(),
    path = require('path');

app.set('views',path.join(__dirname,'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'public')));
require('./routes/routes.js')(express, app);

app.set('port', 3000);
var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
    console.log('La pagina corre en el puerto' + app.get('port'));
})