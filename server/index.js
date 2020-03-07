const express = require('express');
const morgan = require('morgan');
const coors = require('coors');
const path = require('path');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(coors());

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, `../client/dist`)));

app.listen(port, () => console.log(`\u001b[1;34mServer listening on port ${port}\u001B[37m`));