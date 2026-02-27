const io = require('socket.io')(3000, { cors: { origin: "*" } });
io.on('connection', s => {
  s.on('message', m => io.emit('message', m));
});
console.log('Сервер запущен!');
