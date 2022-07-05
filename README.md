# chat-app-node-socket.io

Flowchart:

in the server:
socket.emit - goes to the individual user,
io.emit - emits to everybody,
socket.on - listens and then emits in it's second paremeter

in main.js:
const socket = io();
socket.on('message', message => {}) - listens for an emitter, and its second paremeter
is a function that spits out the message sent in from the server, use dom manipulation from there.
To send a message to the server from the front-end then back to client:
Add an event listener on submit, catch the form value in a variable,
then socket.emit('emitterNameInServer', messageToSend) \
in the server then it will catch it and then send it back as io.emit
socket.on('emitterNameInServer', (msg) => { io.emit('message', msg) })



documentation to socket.io: https://socket.io/docs/v4/