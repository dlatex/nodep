var express = require('express');
var http = require('http');
var config = require('./config/Config');
var ejs = require('ejs');
var path = require('path');
const app = express();


var port = normalizePort(config.app.port || '8080');
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs'),
    app.engine('html', require('ejs').renderFile);


var server = http.createServer(app);
var debug = require('debug')('server:server');
server.listen(port, function () {
    console.log('Running on port ' + port)
});

server.on('error', onError);
server.on('listening', onListening);

app.get('/', function (req, res) {
    res.render('./pages/index.html')
})
//.get('/', (req, res) => res.render('pages/index'))
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}