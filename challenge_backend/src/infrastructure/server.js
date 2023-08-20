const express = require('express')
const FileService = require('../application/file/FileService')
const { PORT } = require('./config')
const app = express()
const port = PORT
const fileService = new FileService()
const cors = require('cors')


app.use(cors())

app.get('/files/data', async (req, res) => {
  const { fileName , excludeIncompleteData  } = req.query
  try {
   const exclude = (excludeIncompleteData === "true" || excludeIncompleteData === "" || excludeIncompleteData === undefined);
    if (fileName) {
      const fileData = await fileService.getFileByName(fileName , exclude)
      if (fileData) {
        res.json(fileData)
      } else {
        res.status(404).json({ error: 'File not found' })
      }
    } else {
      const files = await fileService.getAllFiles(exclude)
      res.json(files)
    }
  } catch (e) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.get('/files/list', async (req, res) => {
  try {
    const files = await fileService.getAllFilesFromThirdParty()
    res.json(files)
  } catch (e) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
