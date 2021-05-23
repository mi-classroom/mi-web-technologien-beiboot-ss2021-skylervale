const ExifReader = require('exifreader');
const fs = require('fs');
const getImageMetadata = async function (req, res) {
    const { imgpath } = req.query;
    console.log(imgpath)
    fs.readFile('../client/public/data/'+imgpath, function (error, data) {
        if (error) {
            console.error('Error reading file.');
            res.send('Error reading file.');
        }
    
        try {
            const tags = ExifReader.load(data, {expanded: true});
    
            // The MakerNote tag can be really large. Remove it to lower memory
            // usage if you're parsing a lot of files and saving the tags.
            if (tags.exif) {
                delete tags.exif['MakerNote'];
            }
    
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
