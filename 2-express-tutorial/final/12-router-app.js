const express = require('express');
const auth = require('./routes/auth');
const people = require('./routes/people');

const app = express();

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// user auth
app.use('/login', auth);
// api setup
app.use('/api/people', people);

app.listen(5000, () => console.log('Server is listening on port 5000...'));
