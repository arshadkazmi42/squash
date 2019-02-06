const printVersion = () => {
  let pjson = require('../../package.json');
  console.log(`Squash version is ${pjson.version}`);
};

module.exports = printVersion;
