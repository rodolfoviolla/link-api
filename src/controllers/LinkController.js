const mongoose = require('mongoose')
const Link = mongoose.model('Link')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const links = await Link.paginate({}, { page, limit: process.env.PAGINATE || 10 })

    return res.json(links)
  },
  async show(req, res) {
    const link = await Link.findById(req.params.id)

    return res.json(link)
  },
  async store(req, res) {
    const link = await Link.create(req.body)

    return res.json(link)
  },
  async update(req, res) {
    const link = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(link)
  },
  async destroy(req, res) {
    await Link.findByIdAndRemove(req.params.id)
    
    return res.send()
  }
}