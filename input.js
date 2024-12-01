const { dirname, join } = require("path");
const { readFileSync } = require("fs");

exports.input = (path, example = false) => {
  path = join(dirname(path), example ? "example.txt" : "data.txt");
  return readFileSync(path).toString().split(/\r\n/);
};
