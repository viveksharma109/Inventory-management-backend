const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.JWT_SECRET;
console.log("check 1");
function verifyToken(token) {
    const decoded = jwt.verify(token.split(' ')[1], secret, (err, decoded) => {
        if (err) {
            return null;
        }
        return decoded;
    });
    return decoded;
}
module.exports = verifyToken;
