// task -4-  , you will:

// Create a file named "password-generator"  
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.

const generator = require('generate-password');

const password = generator.generate({
	length: 14,
	numbers: true,
    symbols: true
});

console.log('generated password: ' +  password);