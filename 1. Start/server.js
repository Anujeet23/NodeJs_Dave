console.log("Hello World!");

// console.log(global);

const os = require("os");
const path = require("path");
const math = require("./math");

console.log(math.add(4, 2));
console.log(math.subtract(4, 2));
console.log(math.multiply(4, 2));
console.log(math.divide(4, 2));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));