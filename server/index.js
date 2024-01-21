import express from 'express';
import {WebSocketServer} from 'ws';

const app = express();
const port = 8080;

// https://hoppscotch.io/realtime/websocket use this to test the web sockets
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => {
        console.log('Client disconnected');
    });
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send('thanks, client!');
    });
});