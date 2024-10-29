const bcrypt = require('bcryptjs');

const password = '111222333'; 
const hashedPassword = bcrypt.hashSync(password, 8);
console.log('Hashed password:', hashedPassword);
