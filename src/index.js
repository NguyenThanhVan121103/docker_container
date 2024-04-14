const express = require('express');

const key = require('./config/main.js');
const ConnectDB = require('./config/db.js')


const {port, mongoURL} = key;

ConnectDB(mongoURL);

const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));