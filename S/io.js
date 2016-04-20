/**
 * Created by heeseok on 16. 4. 19.
 */

module.exports = function(server) {
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        socket.on('message', function(msg) {
            console.log(msg);
            socket.emit('my message', msg);
            //자신을 제외한 나머지 소켓들에거 통신을 보낸다.
            socket.broadcast.emit('other message', msg);
        });
    });
    return io;
}

/*
* namespace
* room
* channel
*
*
*d
*
* */

