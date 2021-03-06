const fs = require('fs');
const getJsonData = async function (req, res) {
    const { jsonpath } = req.query;
    fs.readFile('./data/'+jsonpath, function (error, data) {
        if (error) {
            console.error('Error reading json file.');
            res.send('Error reading json file.');
        }
        res.send(data)
    });
    
}

module.exports = {
    getJsonData
}
