const fs = require('fs');

const { CONSTANTS } = require('../util');


const commandsList = () => {

  console.log('Alias -> Command');
  console.log('================\n');

  // Reading squash config directory files
  fs.readdir(CONSTANTS.ROOT_DIR, function(err, filenames) {
    if (err) {
      console.log('Error reading files', err);
      return;
    }

    // Reading every file and logging its content
    filenames.forEach( async (filename) => {
      try {
        const content = fs.readFileSync(`${CONSTANTS.ROOT_DIR}/${filename}`, 'utf-8').split('\n');
        if (content[0] === `# ${CONSTANTS.SIGNATURE}`) {
          console.log(`${filename}  ->  ${content[1]}\n`);
        }
      } catch (err) {
        console.log('Error', err);
        return;
      }
    });
  });
};


module.exports = commandsList;
