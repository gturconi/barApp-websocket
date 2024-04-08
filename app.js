const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');

const app2 = express();
const webSocketApp = createServer(app2);

const io = new Server(webSocketApp, {
  cors: {
    origin: '*', //`http://${process.env.FRONT_HOST}`,
    // credentials: true,
  },
});

io.on('connection', async (socket) => {
  console.log('a user has connected!');

  socket.on('disconnect', () => {
    console.log('an user has disconnected');
  });

  socket.on('order', async (msg) => {
    console.log('orders');
    io.emit('newOrder');
  });
});

module.exports = { app2, webSocketApp };
