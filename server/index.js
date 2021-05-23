const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');

const app = express()
const apiPort = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to PixtureBox')
})

app.use('/', routes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))