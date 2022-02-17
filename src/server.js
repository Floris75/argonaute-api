const express = require('express');
require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routers');
const server = express();

server.use(morgan('dev'));
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api', router);

server.listen(process.env.APP_PORT, () => {
    console.log('Server running at port', process.env.APP_PORT);
  });