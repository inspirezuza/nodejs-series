const path = require("path");
const os = require("os");

console.log(os.homedir());

console.log(path.parse(__filename));
