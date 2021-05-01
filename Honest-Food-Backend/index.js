const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const geoLocation = require('./lib/routes/geoLocation');


const server = express();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/locate', geoLocation);

server.listen(port, () => console.log(`Server is up and ready to serve on port ${port}.`))
