const path = require('path')
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app)
const socketio = require("socket.io");
const io = socketio(server)

// Run when a client connects
io.on('connection', socket => {
  
    // Welcome current user
    socket.emit('message', 'Welcome to chatcord this is from emit')

    // Broadcast when a user connects, it sends to all clients except the one thats connecting.
    socket.broadcast.emit('message', 'A user has just joined the chat');

    // io.emit Runs when client disconnects
    socket.on('disconnect', ()=> {
        io.emit('message', 'A user has left the chat')
    })

    // io.emit() will send to everybody

    // listen for chatMessage
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg)
    })
    

})



//const httpServer = createServer(app);
//const io = new Server(httpServer, { /* options */ });

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))
const PORT = 3000 || process.env.PORT;



server.listen(PORT, () => console.log(`Listening on port ${PORT}`));



