//const winston = require('winston');
const express = require('express');
const app = express();


require('./startups/routes')(app);
require('./startups/db');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));