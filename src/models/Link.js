const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

LinkSchema.plugin(mongoosePaginate)
mongoose.model('Link', LinkSchema)