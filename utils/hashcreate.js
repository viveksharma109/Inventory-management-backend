
const bcrypt = require('bcrypt');
// const saltRounds = 10;

async function hash(userPassword) {
  try {
    console.log(userPassword)
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (err) {
    console.error('Error during hashing:', err);
    throw err; 
  }
}

module.exports = hash;





