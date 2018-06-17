const spotModel = require('../mongoose/spot.js')

module.exports = {
  getSpots: (req, res) => {
    spotModel.find().exec((err, data) => {
      if (err) {
        res.status(500).send('Something broke : ', err)
      }
      res.json(data)
    })
  },
  getVisibleSpots: (req, res, northEastCorner, southWestCorner) => {

    const nec = JSON.parse(northEastCorner)
    const swc = JSON.parse(southWestCorner)

    console.log('lat ===> ', require('util').inspect(nec.lat - swc.lat, { colors: true, depth: 2 }))
    console.log('lng ===> ', require('util').inspect(nec.lng - swc.lng, { colors: true, depth: 2 }))

    spotModel.find({
      "localisation.lat": { $gte: swc.lat, $lte: nec.lat },
      "localisation.lng": { $gte: swc.lng, $lte: nec.lng },
    }).exec((err, data) => {
      if (err) {
        res.status(500).send('Something broke : ', err)
      }
      res.json(data)
    })
  }
}