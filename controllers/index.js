const spotModel = require('../mongoose/spot.js')
const fakeSpot = require('../fixtures.js')

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
  addSpot: (req, res, spot) => {
    // const newSpot = JSON.parse(fakeSpot)

    console.log('spot ===> ', require('util').inspect(spot, { colors: true, depth: 2 }))
    spotModel.insert(spot)
  },
  updateSpot: (req, res ) => {
    spotModel.update()
  },
  deleteSpot: (req, res) => {

  }
}