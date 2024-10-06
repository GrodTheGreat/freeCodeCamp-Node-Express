// Modules
const names = require('./4-names');
// const { john, peter } = require('./4-names'); Could also so this
const sayHi = require('./5-utils');
console.log(names);
const data = require('./6-alternative-flavor');
console.log(data);
require('./7-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);