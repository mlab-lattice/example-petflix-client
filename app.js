const express = require('express')
const proxy = require('express-http-proxy')
const app = express()

app.use(express.static('dist'))
app.use('/api', proxy(process.env.PETFLIX_API_URI || 'localhost:8000'));

app.get('*', (req, res) =>
  res.sendFile(__dirname + '/src/index.html')
)

app.listen(process.env.PORT || 8080, () => {
  console.log('Server listening')
})
