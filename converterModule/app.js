var converter = require('converter');

var num = 15;

var bin = converter.bin(num);
console.log('BIN : ' + bin);

var hex = converter.hex(num);
console.log('HEX : ' + hex);
