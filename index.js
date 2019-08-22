'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect('mongodb+srv://coreychang808:volcomer123@cluster0-vlr04.mongodb.net/test?retryWrites=true&w=majority', mongooseOptions);

require('./api-server/src/server.js').start(3000);
