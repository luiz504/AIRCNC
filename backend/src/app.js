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

    this.Iosocket();
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

  Iosocket() {
    this.socketServer = http.Server(this.server);
    this.io = socketio(this.socketServer);
    this.connectedUsers = {};

    this.io.on('connection', socket => {
      const { user_id } = socket.handshake.query;
      this.connectedUsers[user_id] = socket.id;
    });

    this.server.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;
      return next();
    });
  }
}

export default new App().socketServer;
