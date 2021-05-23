const express = require('express')
const cors = require('cors')

const app = express()
const apiPort = 5000

app.use(cors())

//app.use(express.static(__dirname + '../client/public/data'));

//Generate Data folder tree
const dree = require('dree');
const options = {
    stat: false,
    hash: false,
    sizeInBytes: false,
    size: false,
    normalize: false
  };

const tree = dree.scan('../client/public/data', options);


app.get('/', (req, res) => {
    res.send('Welcome to PixtureBox')
})

app.get('/tree', (req, res) => {
    res.send(tree)
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))