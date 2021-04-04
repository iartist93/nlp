const fs = require("fs");

const wipeDependencies = () => {
  const file = fs.readFileSync("package.json");
  const content = JSON.parse(file);

  // loop through each dev package
  for (const devDep in content.devDependencies) {
    content.devDependencies[devDep] = "*";
  }

  // loop through each package
  for (const dep in content.dependencies) {
    content.dependencies[dep] = "*";
  }

  // convert the json data back to string and write it
  fs.writeFileSync("package.json", JSON.stringify(content));
};

if (require.main === module) {
  wipeDependencies();
} else {
  module.exports = wipeDependencies;
}
