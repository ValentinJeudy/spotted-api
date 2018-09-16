const express = require('express')
const app = express()
const Mongoose = require('mongoose')
const config = require('config')
const bdd = config.get('options.BDD_URL')
// const routes = require('./routes')
const port = config.get('options.SERVER_PORT')
const socket = require('socket.io')

const server = app.listen(config.get('options.SERVER_PORT'))

console.info('listening on port :', port)

Mongoose.connect(bdd)

app.use(express.static('public'))

const io = socket(server)

io.on('connection', socket => {
  console.log('===> Connection to socket as been made <====')
})

// routes(server)
