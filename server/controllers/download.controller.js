const file_system = require('fs');
const archiver = require('archiver');

const zipFolder = async function (req, res) {
    const {folderPath} = req.query;
    const output = file_system.createWriteStream('target.zip');
    const archive = archiver('zip');
    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    
    archive.on('error', function(err){
        throw err;
    });
    
    archive.pipe(output);
    
    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(folderPath, false);
    
    archive.finalize();
}

module.exports = {
    zipFolder
}