import fs from "fs";
let date = new Date();
fs.readdirSync(process.cwd()).forEach((year) => {
  if (year != date.getFullYear().toString()) return;
  for (let day = 1; day <= date.getDate(); day++) {
    let dayString = "day" + day.toString().padStart(2, "0");
    let dir = `${process.cwd()}/${year}/${dayString}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.writeFileSync(
        `${dir}/part1.js`,
        `import input from "../../utils/input.js";\nlet lines = input("2024/${dayString}/data.txt");`
      );
      fs.writeFileSync(
        `${dir}/part2.js`,
        `import input from "../../utils/input.js";\nlet lines = input("2024/${dayString}/data.txt");`
      );
      fs.writeFileSync(`${dir}/data.txt`, "");
    }
    if (fs.existsSync(`${dir}/data.txt`)) continue;
    fs.writeFileSync(`${dir}/data.txt`, "");
  }
});
