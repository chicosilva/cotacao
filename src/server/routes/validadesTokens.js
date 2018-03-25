const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');

function checkApiToken (token) {

    if (!token || token == '') {
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

function validadeApiToken (token){

    return new Promise((resolve, reject) => {

        const decoded = checkApiToken(token);

        if (!decoded) {
            reject('Token invalid');
        } else {
            return resolve(null);
        }

    });

}

module.exports.validadeApiToken = validadeApiToken;
module.exports.checkApiToken = checkApiToken;
