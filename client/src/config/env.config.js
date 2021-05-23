const host = {
    'test': "http://supersrv.de:5000",
    'localhost': "http://localhost:5000",
};

//Update this to switch servers
//const env = "test";
const env = "localhost";
//const env = "staging";
//const env = "prod";

const path = host[env];

module.exports = {
    path
}
