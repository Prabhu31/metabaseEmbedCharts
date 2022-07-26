const express = require('express')
const app = express()
var jwt = require('jsonwebtoken')

var METABASE_SITE_URL = 'https://hwyhaul.laker.work'
var METABASE_SECRET_KEY = 'TOKEN'

const cors = require('cors')
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

app.get('/question/:id', (req, res) => {
  var payload = {
    resource: { question: parseInt(req.params.id) },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60 // 10 minute expiration
  }
  var token = jwt.sign(payload, METABASE_SECRET_KEY)

  var iframeUrl =
    METABASE_SITE_URL +
    '/embed/question/' +
    token +
    '#bordered=true&titled=true'
  var reponse = { url: iframeUrl }
  res.send(reponse)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server started on port ${PORT}`))
