import fastify from "fastify";
import cors from '@fastify/cors';
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath} from 'url';
import { WebSocketServer } from 'ws';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename );
const server = fastify();
server.register(cors)
server.register(fastifyStatic, {
    root: path.join(_dirname,'client'),
})

const webSocketServer = new WebSocketServer({port:5557})

webSocketServer.on('connection', client => {
    console.log(`-----------------NEW USER CONNECTED:!`)


    client.on('message', data => {
        console.log('-------------------Got message:' + data)
        const timeSendMessage = `[${(new Date).toLocaleTimeString('uk')}] `
        webSocketServer.clients.forEach(cl => {
            if(cl !== webSocketServer) {
                cl.send(`${timeSendMessage} ${data}: `)
            }
        })
    })
    client.on('close', () => {
        console.log('-----------------USER HAS LEFT')
    })
})

server.listen(5555)
    .then(() => {
        console.log("Successfully started")
    })
    .catch(err => {
        console.error(err)
    })