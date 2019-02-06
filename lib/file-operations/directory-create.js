const fs = require('fs');

const { CONSTANTS } = require('../util');


const directoryCreate = () => {
  try {
    console.log('Directory does not exist!!!');
    console.log('Creating Directory....');

    fs.mkdirSync(`${CONSTANTS.ROOT_DIR}`);

    console.log('Directory created!!!');
  } catch (err) {
    console.log(err);
  }
};


module.exports = directoryCreate;
