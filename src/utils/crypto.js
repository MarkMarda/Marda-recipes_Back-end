const bcrypt = require("bcrypt");

//encrypts the password created
const hashPassword = (plainPassword) => {

  return bcrypt.hashSync(plainPassword, 10);

};

//To compare the password received with the pass of db
const comparePassword = (plainPassword, hashedPassword) => {

  return bcrypt.compareSync(plainPassword, hashedPassword);

};

module.exports = {

  hashPassword,
  comparePassword
  
};