const systemAlias = (systemAlias) => {
  const totalCommandsInOneLine = 20;
  console.log('List of all system reserved alias.\n');
  let printData = [];
  for (let i = 0; i < systemAlias.length; i++) {
    printData.push(systemAlias[i]);
    if (printData.length === totalCommandsInOneLine) {
      console.log(printData.join(', '));
      printData = [];
    }
  }
};


module.exports = systemAlias;
