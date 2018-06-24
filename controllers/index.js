const spotModel = require('../mongoose/spot.js')
const fakeSpot = require('../fixtures.js')
const db = require('mongodb')

module.exports = {
  getSpots: (req, res) => {
    spotModel.find().exec((err, data) => {
      if (err) {
        res.status(500).send('Something broke : ', err)
      }
      res.json(data)
    })
  },
  getVisibleSpots: (req, res, corners) => {
    const coords = JSON.parse(corners)

    console.log('corners ===> ', require('util').inspect(corners, { colors: true, depth: 2 }))
    console.log('coords ===> ', require('util').inspect(coords, { colors: true, depth: 2 }))

    spotModel.find({
      "localisation.lat": { $gte: coords.swc.lat, $lte: coords.nec.lat },
      "localisation.lng": { $gte: coords.swc.lng, $lte: coords.nec.lng },
    }).exec((err, data) => {
      if (err) {
        res.status(500).send('Something broke : ', err)
      }
      res.json(data)
    })
  },
  addSpot: async (req, res, spot) => {
    const newSpot = JSON.parse(spot)

    console.log('spot ===> ', require('util').inspect(newSpot, { colors: true, depth: 2 }))
    await spotModel.create(newSpot, (err, res) => {
      if (err) {
        res.status(500).send('Seomething broke : ', err)
      }
      console.log('res ===> ', require('util').inspect(res, { colors: true, depth: 2 }))
      return 'gg'
    })
  },
  updateSpot: (req, res ) => {
    spotModel.update()
  },
  deleteSpot: (req, res) => {

  }
}