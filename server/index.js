const express = require('express');
const path = require("path");
const cors = require('cors');
const routes = require('./routes/index.route');
const bodyParser = require('body-parser');
const app = express();
const apiPort = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/data/", express.static(path.join(__dirname, "/data")));

app.get('/', (req, res) => {
    res.send('Welcome to PixtureBox');
})

app.use('/', routes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))