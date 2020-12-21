/* Broker MQTT - Ing. Lucas Omar Moreno */

const mosca = require('mosca');
const chalk = require('chalk');
var settings = { port: 1883 };
var broker = new mosca.Server(settings);

// Evento: Listo para funcionar
broker.on('ready', () => {
    console.log(chalk.blue('[MQTT Broker]') + ` - mqtt://localhost:${settings.port}`);
});

// Evento: Conexion de cliente
broker.on('clientConnected', client => {
    console.log(chalk.blue('[MQTT Broker]') + ` - Usuario conectado - ${client.id}`);
});

// Evento: Desconexion de cliente
broker.on('clientDisconnected', client => {
    console.log(chalk.blue('[MQTT Broker]') + ` - Usuario desconectado - ${client.id}`);    
})

// Evento: Publicacion
broker.on('published', (packet) => {
    console.log(chalk.blue('[MQTT Broker]') + ` - Paquete: ${packet.payload}`)
});
