const mocha = require('mocha')
const http = require('http')
const { PORT } = require('../src/infrastructure/config')
const expect = require('chai').expect
const describe = mocha.describe
const it = mocha.it

describe('GET /files/data', () => {
  it('should return an array of files and lines', (done) => {
    const options = {
      hostname: 'localhost',
      port: PORT,
      path: '/files/data',
      method: 'GET'
    }

    const req = http.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        const responseBody = JSON.parse(data)

        expect(res.statusCode).to.equal(200)
        expect(responseBody).to.be.an('array')
        expect(responseBody).to.have.lengthOf.at.least(1) // Assuming there should be at least one file

        // Add more assertions based on the provided response structure
        // ...

        done()
      })
    })

    req.end()
  })
})

describe('GET /files/data?fileName=""', () => {
  it('should return an array of files and lines for the specified file', (done) => {
    const fileName = 'test3.csv'

    const options = {
      hostname: 'localhost',
      port: PORT,
      path: `/files/data?fileName=${fileName}`,
      method: 'GET'
    }

    const req = http.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        const responseBody = JSON.parse(data)

        expect(res.statusCode).to.equal(200)
        expect(responseBody).to.be.an('array')
        expect(responseBody).to.have.lengthOf(1)
        expect(responseBody[0]).to.have.property('file', fileName)

        // Add more assertions based on the provided response structure for the specified file
        // ...

        done()
      })
    })

    req.end()
  })
})
