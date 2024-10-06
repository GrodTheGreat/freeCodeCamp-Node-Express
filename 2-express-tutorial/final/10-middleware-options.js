const express = require('express');
const { products } = require('./data');
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');
const morgan = require('morgan');

const app = express();
// req => middleware => res

// 1. use vs. route
//  2. options - our own / express / third party

// app.use('/api', [logger, authorize]);
// app.use(express.static('./public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).send('Home');
});

app.get('/about', (req, res) => {
    res.status(200).send('About');
});

app.get('/api/products', (req, res) => {
    res.status(200).send('Products');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.status(200).send('items');
});
app.listen(5000, () => console.log('Server is listening on port 5000...'));
