const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var session = require('express-session'),
  bodyParser = require('body-parser');
const passport = require('./config/passport');
const path = require('path');

//Global variables
const app = express();
const routes = require('./routes');
const users = require('./routes/api/user');
const PORT = process.env.PORT || 3001;

//Configuration

app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
app.use(routes);
app.use(users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}
//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/meetingsdb');

// Start the API server
app.listen(process.env.PORT || PORT, function() {
  console.log('Express server is up and running!');
});
