/**
 * Keeping this test seperate for running in local system
 * As travis is failing for this test due to file reading permissions.
 */
const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const fs = require('fs');
const squash = require('../lib/squash');
const { CONSTANTS } = require('../lib/util');
const { aliasExists } = require('../lib/file-operations');

const SQUASH_ALIAS = ['squashed'];
const SQUASH_ALIAS_REMOVE = ['--rm=squashed'];
const SQUASH_FLAG = ['ls', '--alias=squashed'];
const SQUASH_PASS_ARGS = ['ls', '--alias=passed-args', '--pass-args'];


const validateFileContent = (file, flag) => {
  const content = fs.readFileSync(`${CONSTANTS.ROOT_DIR}/${file}`, 'utf-8');
  switch (flag) {
    case CONSTANTS.PASS_ARGS:
      expect(content).to.equal(`${SQUASH_PASS_ARGS[0]} "$@"`);
      break;
    default:
      expect(content).to.equal(SQUASH_FLAG[0]);
      break;
  }
};

describe('Validating squash removed', function() {
  beforeEach(function () {
    sinon.stub(console, 'log').returns(void 0);
    sinon.stub(console, 'error').returns(void 0);
  });
  afterEach(function () {
    console.log.restore();
    console.error.restore();
  });
  it('removes a squashed command', () => {
    squash(SQUASH_FLAG);
    assert.isTrue(aliasExists(SQUASH_ALIAS), 'file should have been added.');
    squash(SQUASH_ALIAS_REMOVE);
    assert.isFalse(aliasExists(SQUASH_ALIAS), 'file should have been removed.');
    assert.isTrue(console.log.called, 'log should have been called.');
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
  });
  it('does not remove squashed command, command does not exist', () => {
    squash(SQUASH_ALIAS_REMOVE);
    assert.isTrue(console.log.called, 'log should have been called.');
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
    expect(console.log.getCall(13).args[0]).to.equal('Cannot delete, command squashed does not exist!');
  });
});

describe('Validating squash created', function () {
  beforeEach(function () {
    sinon.stub(console, 'log').returns(void 0);
    sinon.stub(console, 'error').returns(void 0);
  });
  afterEach(function () {
    console.log.restore();
    console.error.restore();
  });
  it('squash a command', () => {
    squash(SQUASH_FLAG);
    assert.isTrue(console.log.called, 'log should have been called.');
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
    validateFileContent('squashed');
  });
  it('squash a command with --pass-args', () => {
    squash(SQUASH_PASS_ARGS);
    assert.isTrue(console.log.called, 'log should have been called.');
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
    validateFileContent('passed-args', CONSTANTS.PASS_ARGS);
  });
});
