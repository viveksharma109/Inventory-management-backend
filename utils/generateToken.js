const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.JWT_SECRET;
// Function to generate a JWT for a user
function generateJWT(username, email) {
  const payload = {
    UserName: username,
    Email: email,
  };

  const token = jwt.sign(payload, secret, { expiresIn: '1y' });
  return token;
}
module.exports = generateJWT;
