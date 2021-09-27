const ExifReader = require('exifr');
const exiftool = require("exiftool-vendored").exiftool;

const getImageMetadata = async function (req, res) {
    const { imgpath } = req.query;
    console.log(imgpath)
    ExifReader.parse("data/"+imgpath, true)
    .then(output => {
        res.send(output)
    })   
}

const setImageMetadata = async function (req, res) {
    const {params, imgpath} = req.body;
    console.log("params", params)
    exiftool.write("data/"+imgpath, params);
    res.send(params);
}

module.exports = {
    getImageMetadata,
    setImageMetadata
}
