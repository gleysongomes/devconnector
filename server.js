const express = require('express');

const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mogoURI;

const app = express();

app.get('/', (req, res) => res.send('Hello Word'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));