const express = require('express')
const server = express()
const Mongoose = require('mongoose')
const config = require('config')
const bdd = config.get('options.BDD_URL')
const routes = require('./routes')
const port = config.get('options.SERVER_PORT')
const socket = require('socket.io')

server.listen(config.get('options.SERVER_PORT'))

console.info('listening on port :', port)

Mongoose.connect(bdd)

routes(server)
