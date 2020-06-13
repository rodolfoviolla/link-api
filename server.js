const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const porta = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/linkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(porta)