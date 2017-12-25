let express = require('express');
let http = require('http');
let config = require('./config/Config');
let mongojs = require('mongojs');
let mongoose = require('mongoose');
let path = require('path');
let morgan = require('morgan');
let bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
let passport = require('./config/passport')
let api = require('./routes/api');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodep', { useMongoClient: true });
let databases = mongoose.connection;
databases.on('error', console.error.bind(console, 'connection error:'));
databases.once('open', function () {
    console.log("database running")
});
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs'),
    app.engine('html', require('ejs').renderFile);
app.use(passport.initialize());
app.use(passport.session());

var port = normalizePort(config.app.port || '8080');
app.set('port', 3000);
var server = http.createServer(app);
var debug = require('debug')('server:server');

server.listen(port, function () {
    console.log('Running on port ' + port)
});

server.on('error', onError);
server.on('listening', onListening);

app.use('/api', api);
app.get('/', function (req, res) {
    res.render('./pages/index.html')
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    console.log(err);
});
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