var express = require('express');
var multer = require('multer');
var http = require('http');
//var upload = multer({ dest: 'uploads/' });
//uploads le fichier dans lequel ils sont stockés les images 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toString() + '-' + file.originalname)
    }
});
var upload = multer({ storage: storage })
const app = express();
app.get('/', function (req, res) {
    res.json('Hello');
})
app.post('/profile', upload.single('userAvatar'), function (req, res, next) {
    res.send({
        message: req.file
    })
})


var port = normalizePort(process.env.PORT || '8080');
app.set('port', 3000);
var server = http.createServer(app);
var debug = require('debug')('server:server');

server.listen(port, function () {
    console.log('Running on port ' + port)
});
server.on('error', onError);
server.on('listening', onListening);
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