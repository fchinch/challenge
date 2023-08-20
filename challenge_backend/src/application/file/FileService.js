const axios = require('axios')
const Lines = require('../../domain/lines/Lines')
const Files = require('../../domain/files/Files')

class FileService {
  constructor () {
    this.filesData = []
  }
  async getAllFilesFromThirdParty () {
    const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files/', {
      headers: {
        Authorization: 'Bearer aSuperSecretKey'
      }
    })
    const Data = response.data
    return Data
  }

  async getAll (excludeIncompleteData=true) {
    const Data = await this.getAllFilesFromThirdParty()
    const files = Data.files
    await Promise.all(files.map(async (file) => {
      try {
        await this.processCSVData(file, excludeIncompleteData)
      } catch (error) {
        console.error(`Error processing ${file}:`, error)
      }
    }))
  }

  /**
   * Fetches and parses a CSV file.
   *
   * @param {string} filename - The name of the CSV file to fetch.
   * @param {boolean} excludeIncompleteData - Whether to exclude incomplete data.
   * @returns {Promise<any>} - A promise that resolves to the parsed CSV data.
   */
  async fetchAndParseCSV (filename, excludeIncompleteData) {
    const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/file/' + filename, {
      headers: {
        Authorization: 'Bearer aSuperSecretKey'
      }
    })

    const csvData = response.data
    const lines = csvData.split('\n')
    const headers = lines[0].split(',')
    const parsedData = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',')
        const rowData = {}
        let exclude = false;
        for (let j = 0; j < headers.length; j++) {
          if(excludeIncompleteData === true && (values[j] === '' || values[j] ===" " || values[j] === null || values[j] === undefined)) {
            exclude = true;
            break;
          }
          rowData[headers[j]] = values[j]
        }

        if(!exclude || excludeIncompleteData ===false) {
          parsedData.push(rowData)
        }

    }

    return parsedData
  }

  async getAllFiles (excludeIncompleteData = true) {
    this.filesData = []
    //console.log(`getAllFiles excludeIncompleteData`,excludeIncompleteData)
    await this.getAll(excludeIncompleteData)

    this.filesData.sort((a, b) => a.file.localeCompare(b.file))
    return this.filesData
  }

  async getFileByName (fileName , excludeIncompleteData) {
    this.filesData = []
    await this.processCSVData(fileName , excludeIncompleteData)
    return this.filesData
  }

  async processCSVData (filename , excludeIncompleteData=true) {
    const parsedData = await this.fetchAndParseCSV(filename , excludeIncompleteData)
    const filesMap = new Map()

    parsedData.forEach((row) => {
      const { file, text, number, hex } = row
      if (!filesMap.has(file)) {
        filesMap.set(file, [])
      }
      filesMap.get(file).push(new Lines(text, parseInt(number), hex))
    })

    // console.log('filesMap',filesMap);

    filesMap.forEach((lines, file) => {
      this.filesData.push(new Files(file, lines))
    })
  }
}

module.exports = FileService
