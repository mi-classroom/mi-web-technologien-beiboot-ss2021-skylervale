const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');

const app = express()
const apiPort = 5000

app.use(cors())

//Generate Data folder tree
/*const dree = require('dree');
const options = {
    stat: false,
    hash: false,
    sizeInBytes: false,
    size: false,
    normalize: false
  };

const tree = dree.scan('../client/public/data', options);*/


app.get('/', (req, res) => {
    res.send('Welcome to PixtureBox')
})

app.use('/', routes);

/*app.get('/tree', (req, res) => {
    res.send(tree)
})*/

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))