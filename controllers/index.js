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
        res.status(500).send(`Something broke : ${err}`)
      }
      res.json(data)
    })
  },
  addSpot: (req, res, spot) => {
    const newSpot = JSON.parse(spot)

    spotModel.create(newSpot, (err, data) => {
      if (err) {
        res.status(500).send(`Seomething broke : ${err}`)
      }
      res.status(200).send(`The spot : ${data.name} has been succesfully added !!`)
    })
  },
  updateSpot: (req, res, spot) => {
    const newSpot = JSON.parse(spot)

    spotModel.updateOne({_id: newSpot._id}, newSpot, (err, data) => {
    if (err) {
      res.status(500).send(`Something broke : ${err}`)
    }
    res.status(200).send(`The spot : ${newSpot.name} has been succesfully updated !!`)
    })
  },
  deleteSpot: (req, res) => {

  }
}