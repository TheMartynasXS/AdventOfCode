import fs from "fs";
let date = new Date();
fs.readdirSync(process.cwd()).forEach((year) => {
  if (year != date.getFullYear().toString()) return;
  for (let day = 1; day <= date.getDate(); day++) {
    let dayString = "day" + day.toString().padStart(2, "0");
    let dir = `${process.cwd()}/${year}`;
    if (!fs.existsSync(`${dir}/${dayString}.js`)) {
      fs.writeFileSync(
        `${dir}/${dayString}.js`,
        `import input from "../utils/input.js";\nlet lines = input("${year}");\nlet result = { part1: 0, part2: 0 };`
      );
    }
    if (fs.existsSync(`${dir}/data.txt`)) continue;
    fs.writeFileSync(`${dir}/data.txt`, "");
  }
});
