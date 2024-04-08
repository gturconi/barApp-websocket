const { app2 } = require('./app');
const { webSocketApp } = require('./app');

// Settings
app2.set('server_port', process.env.SERVER_PORT || 3000);
process.env.TZ = 'Etc/Universal';

//Iniciamos el servidor de websocket
webSocketApp.listen(app2.get('server_port'), () => {
  console.log(`Server running on port ${app2.get('server_port')}`);
});
