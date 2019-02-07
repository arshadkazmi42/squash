const PACKAGE_CONFIG = require('../../package.json');

const printVersion = () => {
  console.log(PACKAGE_CONFIG.version);
};

module.exports = printVersion;
