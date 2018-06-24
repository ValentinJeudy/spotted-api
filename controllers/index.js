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
  deleteSpot: (req, res, spot) => {
    const spotToRemove = JSON.parse(spot)

    console.log('spotToRemove ===> ', require('util').inspect(spotToRemove, { colors: true, depth: 2 }))
    spotModel.deleteOne(spotToRemove, (err, data) => {
      if (err) {
        res.status(500).send(`Something broke : ${err}`)
      }
      res.status(200).send(`The spot : ${spotToRemove._id} has been succesfully deleted !!`)
    })
  }
}