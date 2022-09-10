const fs = require("fs-extra");
const childProcess = require("child_process");

try {
  // Remove current build
  fs.removeSync("/build");

  // Transpile the typescript files
  childProcess.exec("tsc --build tsconfig.json");
} catch (err) {
  console.log(err);
}
