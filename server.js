const express = require('express')
const server = express()
const Mongoose = require('mongoose')
const config = require('config')
const spotModel = require('./mongoose/spot.js')
const bdd = config.get('options.BDD_URL')
const routes = require('./routes')
const port = config.get('options.SERVER_PORT')

server.listen(config.get('options.SERVER_PORT'))

Mongoose.connect(bdd)

routes(server)
