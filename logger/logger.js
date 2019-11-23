'use strict';
const net = require('net');
const socket = new net.Socket();

socket.connect({
  port: 3001,
  host: 'localhost',
}, () => {
  console.log('logger');
});

socket.on('data', (payload) => {
  console.log('here');
  let data = JSON.parse(payload.toString());
  console.log(data);
});

