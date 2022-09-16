const os = require("os");

const user = os.arch(); //x64
console.log(user);

const user1 = os.cpus(); //Returns an array containing information about the computer's CPUs
console.log(user1);
// {
//   model: 'Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz',
//   speed: 2000,
//   times: { user: 2574950, nice: 8980, sys: 733760, idle: 51216220, irq: 0 }
// }

const user2 = os.endianness();
console.log(user2); //LE

//endianness:the term used to describe the byte order of data

const user3 = os.platform(); //os Name
console.log(user3);
