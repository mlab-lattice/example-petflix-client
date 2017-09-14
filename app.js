const express = require('express')
const mongodb = require('mongodb')
const app = express()

app.use(express.static('dist'))

mongodb.MongoClient.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test').then(db => {
  
  let petflix = db.collection('petflix')
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.get('/videos', (req, res) => {
    petflix.find().toArray().then(data => {
      res.send(data)
    })
  })
  
  app.get('/random', (req, res) => {
    petflix.aggregate([{ $sample: { size: 1 } }]).toArray().then(data => {
      res.redirect(`/view/${data[0]._id}`)
    })
  })
  
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log('listening')
  })
})