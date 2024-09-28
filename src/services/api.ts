const express = require('express');
const cors = require('cors');

const api = express();

const corsOptions = {
    origin: 'http://localhost:8001', // Substitua pelo domínio do cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Permite o envio de credenciais
  };

api.use(cors(corsOptions));

export { api }