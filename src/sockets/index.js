const Card = require("../models/cards");
/*
socket.emit('message', "this is a test"); //sending to sender-client only
socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
io.emit('message', "this is a test"); //sending to all clients, include sender
io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
socket.emit(); //send to all connected clients
socket.broadcast.emit(); //send to all connected clients except the one that sent the message
socket.on(); //event listener, can be called on client to execute on server
io.sockets.socket(); //for emiting to specific clients
io.sockets.emit(); //send to all connected clients (same as socket.emit)
io.sockets.on() ; //initial connection from a client.
*/

exports = module.exports = function(io){
    io.sockets.on('connection' , function(socket){
        console.log("new client connected", socket.id);
        // Add other events

        getConnectionAndEmit(socket);

        socket.on("disconnect", () => console.log("client disconnected"));
    });

    const getConnectionAndEmit = async socket => {
        try {
            const cards = await Card.find();
            socket.emit("InitData", cards);
            console.log("pushing cards to new user");
        } catch (error) {
            console.error(error);
        }
    }
}