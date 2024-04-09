const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorhandler());








app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}.`);
});

module.exports = app;