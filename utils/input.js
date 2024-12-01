import { dirname, join } from "path";
import fs from "fs";

export default function (path) {
  path = join(process.cwd(), path);
  return fs.readFileSync(path).toString().split(/\r\n/);
}
