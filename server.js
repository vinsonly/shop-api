
require('dotenv').config(); // load the environment variables
const express = require('express');
const bodyParser = require('body-parser');
const appRoot = require('app-root-path');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.locals.appName = 'Shopify API';

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  
// require('./routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
