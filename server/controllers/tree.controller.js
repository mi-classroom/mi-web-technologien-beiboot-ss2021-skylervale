//Generate Data folder tree
const dree = require('dree');
const options = {
    stat: false,
    hash: false,
    sizeInBytes: false,
    size: false,
    normalize: false
  };

const getTree = async function (req, res) {
    const tree = dree.scan('../client/public/data', options);
    if (tree) {
        res.send(tree);
    }
}
module.exports = {
    getTree
}

