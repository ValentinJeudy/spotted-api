const spotModel = require('../mongoose/spot.js')
const fakeSpot = require('../fixtures.js')

console.log('fakeSpot ===> ', require('util').inspect(fakeSpot, { colors: true, depth: 2 }))
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
    const newSpot = JSON.parse(fakeSpot)

    console.log('spots parsed ===> ', require('util').inspect(newSpot, { colors: true, depth: 2 }))
    spotModel.insert({

    })
  }
}