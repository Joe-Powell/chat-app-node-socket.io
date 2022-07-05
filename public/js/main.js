
const chatForm = document.getElementById('chat-form')
 const chatMessages = document.querySelector('.chat-messages')



const socket = io();

// Message from server
socket.on('message', message => {
    console.log(message)
    outputMessage(message)

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = chatForm.msg.value;
    console.log(msg)

    // emit message to server
    socket.emit('chatMessage',msg)

    // clear input
    chatForm.msg.value ='';
    chatForm.msg.focus()

})


// Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML= `<p class="meta">Mary <span>9:15pm</span></p>
    <p class="text">
        ${message}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div)
}

