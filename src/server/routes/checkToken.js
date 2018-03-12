const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');

function checkToken(token) {
     
    if(!token || token == ''){
        return false;
    }
    
    this.decoded = false;

    jwt.verify(token, keys.secret, (err, decoded) => {

        if (!err) {
            this.decoded = decoded;
        }
        
    });

    return this.decoded;
}

module.exports = checkToken;