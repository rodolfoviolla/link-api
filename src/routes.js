const express = require('express')
const routes = express.Router()
const LinkController = require('./controllers/LinkController')

routes.get('/links', LinkController.index)
routes.get('/links/:id', LinkController.show)
routes.post('/links', LinkController.store)
routes.put('/links/:id', LinkController.update)
routes.delete('/links/:id', LinkController.destroy)

module.exports = routes