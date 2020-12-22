/*  Suscriptor MQTT - Ing. Lucas Omar Moreno */

const chalk = require('chalk');
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
const topic = 'estado_alarma';

// Evento: Nuevo Mensaje
client.on('message', (topic, message) => {
    console.log(chalk.blue('[MQTT]') + ` - Mensaje Recibido - Topico: ${topic} | Mensaje: ${message}`);      
});

// Evento: Conexion establecida
client.on('connect', () => {
    console.log(chalk.blue('[MQTT]') + ` - Suscriptor Funcionando | Topico: ${topic}`);
    client.subscribe(topic);
});
