const HELP_DATA = require('../../data/help');


const help = () => {
  console.log('\n\n');
  console.log('Usage:');
  console.log('\tsquash {{command}} {{input flags}}');
  console.log('\n');
  console.log('Flags:');

  // Printing all the flags from help data
  for (let i=0;i<HELP_DATA.length;i++) {

    console.log(`\t${HELP_DATA[i].flag}\t :  \t${HELP_DATA[i].description}`);
  }

  console.log('\n');
  console.log('Notes');
  console.log(' ✔ Provide absolute path of the files/directory, if the commands uses any file/directory from your system');
  console.log(' ✔ Wrap the command in double quotes (""), if command comprises of spaces or special characters');
  console.log('\n\n');
  return;
};


module.exports = help;
