const ExifReader = require('exifreader');
const fs = require('fs');
const getImageMetadata = async function (req, res) {
    const { imgpath } = req.query;
    fs.readFile('../client/public/data/'+imgpath, function (error, data) {
        if (error) {
            console.error('Error reading file.');
            res.send('Error reading file.');
        }
    
        try {
            const tags = ExifReader.load(data, {expanded: true});
            console.log(tags)
            res.send(tags)
        } catch (error) {
    
            console.error(error);
            res.send('Error reading file.');
        }
    });
    
}

module.exports = {
    getImageMetadata
}
