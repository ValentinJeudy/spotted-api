const spotModel = require('../mongoose/spot.js')

module.exports = {
  getSpots: (req, res) => {
    spotModel.find().exec((err, data) => {
      if (err) {
        res.status(500).send('Something boke : ', err)
      }
      res.json(data)
    })
  }
}