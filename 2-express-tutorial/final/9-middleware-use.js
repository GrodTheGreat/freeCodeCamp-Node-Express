const express = require('express');
const { products } = require('./data');
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

const app = express();
// req => middleware => res

app.use('/api', [logger, authorize]);

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
