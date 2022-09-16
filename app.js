const os = require("os");
const user = os.uptime();
console.log(user);
const currentOS = {
  name: os.type(),
  release: os.release(),
  total_memory: os.totalmem(),
  free_memory: os.freemem(),
};
console.log(currentOS);
