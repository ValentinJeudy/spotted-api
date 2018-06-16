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

    // const neCorner = JSON.parse(northEastCorner)
    const nec = JSON.parse(northEastCorner)
    const swc = JSON.parse(southWestCorner)

    console.log('nec ===> ', require('util').inspect(nec.lat, { colors: true, depth: 2 }))
    console.log('swc ===> ', require('util').inspect(swc.lat, { colors: true, depth: 2 }))

    spotModel.find({
      localisation:{
        $elemMatch: {
          lat: { $gte: swc.lat, $lte: nec.lat },
          lng: { $gte: nec.lng, $lte: swc.lng }
        }
      }
      // {
      //   lat: { $gte: swc.lat, $lte: nec.lat },
      //   lng: { $gte: nec.lng, $lte: swc.lng }
      // }
    }).exec((err, data) => {
      if (err) {
        res.status(500).send('Something broke : ', err)
      }
      console.log('data ===> ', data)
      res.json(data)
    })
  }
}