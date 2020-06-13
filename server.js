const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Para uso em desenvolvimento e no Heroku
const porta = process.env.PORT || 8080
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/linkapi'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
  mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(porta)