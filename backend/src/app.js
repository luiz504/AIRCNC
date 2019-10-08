import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import http from 'http';
import socketio from 'socket.io';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.socket();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  socket() {
    this.socketServer = http.Server(this.server);
    this.io = socketio(this.socketServer);

    this.io.on('connection', socketparam => {
      console.log('Connected USer', socketparam.id);
    });
  }
}

export default new App().server;

// const app = express()
// // const server = http.Server(app)
// // const io= socketio(server)

// //   io.on('connection', socket => {
// //     console.log('user connected', socket.id)
// //   })
// server.listen(3333)
