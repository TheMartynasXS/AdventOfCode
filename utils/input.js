import { dirname, join } from "path";
import fs from "fs";

export default function () {
  path = join(process.cwd(), "data.txt");
  return fs.readFileSync(path).toString().trim().split(/\r\n/);
}
