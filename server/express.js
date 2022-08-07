const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const itemRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const app = express();

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', itemRoutes);
app.use('/', authRoutes)
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("invalid token...");
    } else {
      next(err);
    }
  });

module.exports = {app};

