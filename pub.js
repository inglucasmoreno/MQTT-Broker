/* Publicador MQTT - Ing. Lucas Omar Moreno */

const chalk = require('chalk');
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.2.113:1883');
const topic = 'alarma_estado';
const message = 'Sonando';

// Evento: Conectado
client.on('connect', () => {
    console.log(chalk.blue('[MQTT]') + ` - Publicador Funcionando | Topico: ${topic}`);
    // Publicar cada 5 segundos
    setInterval(()=>{
        client.publish(topic, message);
        console.log(chalk.blue('[MQTT]') + ` - Mensaje Enviado - Topico: ${topic} | Mensaje: ${message}`);
    },5000);
})