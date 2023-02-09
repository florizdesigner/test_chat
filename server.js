const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const { PORT } = require('./variables.json')

///////////////////////

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json())

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});

////////////////

const rooms = new Map()


///////////////////

app.get('/test', (req, res) => {
    res.json({'message': 'ok'})
})
app.post('/rooms', (req, res) => {
    if (!rooms.has(req.body.roomId)) {
        rooms.set(req.body.roomId, new Map([
            ['users', new Map()],
            ['messages', []]
        ]))
    }
    res.send()
})
server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('server started on port ' + PORT)
})