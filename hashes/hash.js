const crypto = require('crypto');

const input = '22BLC1234';
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);