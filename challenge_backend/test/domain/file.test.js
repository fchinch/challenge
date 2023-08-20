const mocha = require('mocha')
const expect = require('chai').expect
const File = require('../../src/domain/file/File')
const describe = mocha.describe
const it = mocha.it

describe('File', () => {
  it('should create a new file with given id and name', () => {
    const file = new File('file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765')
    expect(file.file).to.equal('file1.csv')
    expect(file.text).to.equal('RgTya')
    expect(file.number).to.equal(64075909)
    expect(file.hex).to.equal('70ad29aacf0b690b0467fe2b2767f765')
  })
})
