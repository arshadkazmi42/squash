/**
 * Keeping this test seperate for running in local system
 * As travis is failing for this test due to file reading permissions.
 */

const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon  = require('sinon');
const fs = require('fs');
const squash = require('../lib/squash');
const CONSTANTS = require('../lib/constants');

const SQUASH_FLAG = [ 'ls', '--alias=squashed' ];

const FILE_NAME = 'squashed';

const validateFileContent = () => {
  return new Promise(function(resolve, reject){
    fs.readFile(`${CONSTANTS.ROOT_DIR}/${FILE_NAME}`, 'utf-8', function(err, content) {
      if (err) {
        reject(err);
      }
      expect(content).to.equal(SQUASH_FLAG[0]);
      resolve();
    });
  })
}


describe('Validating squash created', function() {
  beforeEach(function() {
    sinon.stub(console, "log").returns(void 0);
    sinon.stub(console, "error").returns(void 0);
  });
  afterEach(function() {
    console.log.restore();
    console.error.restore();
  });
  it('squash a command', async () => {
    squash(SQUASH_FLAG)
    assert.isTrue(console.log.called, "log should have been called.");
    expect(console.log.getCall(0).args[0]).to.equal('\n');
    expect(console.log.getCall(1).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(2).args[0]).to.equal('####       ######        #####  ########  #####        ########        ####  ########  ##');
    expect(console.log.getCall(3).args[0]).to.equal('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
    expect(console.log.getCall(4).args[0]).to.equal('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
    expect(console.log.getCall(5).args[0]).to.equal('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
    expect(console.log.getCall(6).args[0]).to.equal('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
    expect(console.log.getCall(7).args[0]).to.equal('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
    expect(console.log.getCall(8).args[0]).to.equal('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
    expect(console.log.getCall(9).args[0]).to.equal('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
    expect(console.log.getCall(10).args[0]).to.equal('###       #############  ########      ######  ########  ####        ######  ########  ##');
    expect(console.log.getCall(11).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(12).args[0]).to.equal('\n');
    await validateFileContent();
  });
})
